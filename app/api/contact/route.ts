import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const SMTP_HOST = 'smtp.gmail.com'
const SMTP_PORT = 465
const SMTP_USER = process.env.CONTACT_EMAIL_USER
const SMTP_PASS = process.env.CONTACT_EMAIL_PASS
const SMTP_TO = process.env.CONTACT_EMAIL_TO

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const { name, company, phone, email, message } = await request.json()

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields.' },
        { status: 400 },
      )
    }

    if (!SMTP_USER || !SMTP_PASS || !SMTP_TO) {
      return NextResponse.json(
        { success: false, message: 'Email settings are not configured.' },
        { status: 500 },
      )
    }

    await transporter.sendMail({
      from: SMTP_USER,
      to: SMTP_TO,
      replyTo: email,
      subject: 'Query from Website Contact',
      text: [
        `Name: ${name}`,
        `Company: ${company || 'N/A'}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Message: ${message}`,
      ].join('\n\n'),
    })

    return NextResponse.json({ success: true, message: 'Your message has been sent.' })
  } catch (error) {
    console.error('Contact form email error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 },
    )
  }
}
