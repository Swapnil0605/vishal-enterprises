import { Resend } from 'resend';

export default async function handler(req, res) {
    // Only accept POST requests
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    const {
        name,
        company,
        email,
        phone,
        service,
        product,
        location,
        message
    } = req.body || {};

    // Basic Validation
    if (!name || !name.trim()) {
        return res.status(400).json({ error: 'Full name is required.' });
    }

    if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ error: 'A valid email address is required.' });
    }

    if (!phone || !phone.trim()) {
        return res.status(400).json({ error: 'Phone number is required.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('[API/Contact] Missing RESEND_API_KEY in environment variables.');
        return res.status(500).json({ 
            error: 'Email service is not configured yet. Please ensure RESEND_API_KEY is provided in environment variables.' 
        });
    }

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'swapnilchikte0@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Vishal Enterprises Website <onboarding@resend.dev>';

    const resend = new Resend(apiKey);

    const emailSubject = `New Inquiry: ${name}${company ? ` (${company})` : ''} - ${product || service || 'General Quotation'}`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Website Enquiry</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
        .container { max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: #0f172a; padding: 24px 32px; border-bottom: 3px solid #e31b23; }
        .header h1 { color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 0.5px; font-weight: 700; }
        .header p { color: #94a3b8; margin: 4px 0 0; font-size: 13px; }
        .content { padding: 28px 32px; }
        .intro { font-size: 15px; line-height: 1.5; color: #334155; margin-bottom: 24px; }
        .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .data-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
        .data-table td.label { width: 35%; font-weight: 600; color: #475569; background: #f8fafc; }
        .data-table td.value { width: 65%; color: #0f172a; font-weight: 500; }
        .message-box { background: #f8fafc; border-left: 4px solid #e31b23; padding: 16px; border-radius: 4px; margin-top: 16px; }
        .message-box h3 { margin: 0 0 8px; font-size: 14px; color: #0f172a; }
        .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
        .footer { background: #f8fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>VISHAL ENTERPRISES</h1>
            <p>New Commercial & Technical Inquiry from Website</p>
        </div>
        <div class="content">
            <p class="intro">You have received a new contact / quotation inquiry from the website form. Details are outlined below:</p>
            
            <table class="data-table">
                <tr>
                    <td class="label">Full Name</td>
                    <td class="value"><strong>${name}</strong></td>
                </tr>
                <tr>
                    <td class="label">Company / Organization</td>
                    <td class="value">${company || 'Not specified'}</td>
                </tr>
                <tr>
                    <td class="label">Email Address</td>
                    <td class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                    <td class="label">Phone Number</td>
                    <td class="value"><a href="tel:${phone}" style="color: #0f172a; font-weight: 600; text-decoration: none;">${phone}</a></td>
                </tr>
                ${service ? `
                <tr>
                    <td class="label">Required Service</td>
                    <td class="value" style="color: #e31b23; font-weight: 600;">${service}</td>
                </tr>` : ''}
                ${product ? `
                <tr>
                    <td class="label">Required Product</td>
                    <td class="value" style="color: #0284c7; font-weight: 600;">${product}</td>
                </tr>` : ''}
                <tr>
                    <td class="label">Project Site / City</td>
                    <td class="value">${location || 'Not specified'}</td>
                </tr>
            </table>

            ${message ? `
            <div class="message-box">
                <h3>Project Specifications & Requirements:</h3>
                <p>${message}</p>
            </div>
            ` : '<p style="font-size: 13px; color: #94a3b8; font-style: italic;">No additional project specifications provided.</p>'}
        </div>
        <div class="footer">
            Submitted from Vishal Enterprises Web Portal • Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
        </div>
    </div>
</body>
</html>
    `;

    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [recipientEmail],
            replyTo: email,
            subject: emailSubject,
            html: htmlContent
        });

        if (error) {
            console.error('[API/Contact] Resend Error:', error);
            return res.status(500).json({ error: error.message || 'Failed to dispatch email via Resend.' });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Inquiry transmitted successfully.',
            id: data?.id 
        });
    } catch (err) {
        console.error('[API/Contact] Unexpected server error:', err);
        return res.status(500).json({ error: 'An unexpected server error occurred while sending email.' });
    }
}
