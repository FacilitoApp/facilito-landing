import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, message' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  })

  const companyLine = company ? `<p><strong>Společnost:</strong> ${company}</p>` : ''

  try {
    await transporter.sendMail({
      from: `"Facilito Web" <${process.env.ZOHO_USER}>`,
      to: 'info@facilito.cz',
      replyTo: email,
      subject: `Nová zpráva z webu – ${name}`,
      text: [
        `Jméno: ${name}`,
        `Email: ${email}`,
        company ? `Společnost: ${company}` : '',
        '',
        message,
      ].filter(Boolean).join('\n'),
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${companyLine}
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('SMTP error:', err.message)
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' })
  }
}
