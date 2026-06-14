import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, subject, message } = data

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Alle Felder sind erforderlich.' }, { status: 400 })
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0EA5E9; border-bottom: 2px solid #0EA5E9; padding-bottom: 10px;">
          Neue Kontaktanfrage über SmartUmrechnen
        </h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Betreff:</strong> ${subject}</p>
          <p style="margin: 10px 0;"><strong>Nachricht:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0EA5E9;">
            ${message.replace(/\n/g, '<br />')}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">
          Gesendet am: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
        </p>
      </div>
    `

    const appUrl = process.env.NEXTAUTH_URL || 'https://smartumrechnen.de'

    const response = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deployment_token: process.env.ABACUSAI_API_KEY,
        app_id: process.env.WEB_APP_ID,
        notification_id: process.env.NOTIF_ID_KONTAKTFORMULAR,
        subject: `Kontaktanfrage: ${subject} (von ${name})`,
        body: htmlBody,
        is_html: true,
        recipient_email: 'hello@new-level-life.de',
        reply_to: email,
        sender_email: `noreply@${new URL(appUrl).hostname}`,
        sender_alias: 'SmartUmrechnen',
      }),
    })

    const result = await response.json()
    if (!result.success && !result.notification_disabled) {
      throw new Error(result.message || 'E-Mail-Versand fehlgeschlagen')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Kontaktformular-Fehler:', error)
    return NextResponse.json({ success: false, message: 'Interner Fehler' }, { status: 500 })
  }
}
