const { Resend } = require('resend');

const resend = new Resend("re_dB1rnfJf_3Hi94t1hGaVoJpGtPYA7mcgD");

const schemaChangeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Database Schema Change Alert</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">⚠️ Schema Change Detected</h1>
            </td>
          </tr>
          
          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 20px 30px;">
              <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.6;">
                <strong>Security Alert:</strong> A schema modification was detected in your PostgreSQL database.
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Hi <strong>{{userName}}</strong>,
              </p>
              
              <p style="margin: 0 0 30px; color: #555555; font-size: 15px; line-height: 1.6;">
                We detected changes to your database schema. Here are the details:
              </p>
              
              <!-- Change Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px;">
                          <strong style="color: #333333;">Project:</strong>
                        </td>
                        <td style="padding: 8px 0; color: #333333; font-size: 14px; text-align: right;">
                          {{projectName}}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px;">
                          <strong style="color: #333333;">Database:</strong>
                        </td>
                        <td style="padding: 8px 0; color: #333333; font-size: 14px; text-align: right;">
                          {{databaseName}}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px;">
                          <strong style="color: #333333;">Change Type:</strong>
                        </td>
                        <td style="padding: 8px 0; text-align: right;">
                          <span style="background-color: #e3f2fd; color: #1976d2; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500;">
                            {{changeType}}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px;">
                          <strong style="color: #333333;">Timestamp:</strong>
                        </td>
                        <td style="padding: 8px 0; color: #333333; font-size: 14px; text-align: right;">
                          {{timestamp}}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px;">
                          <strong style="color: #333333;">IP Address:</strong>
                        </td>
                        <td style="padding: 8px 0; color: #333333; font-size: 14px; text-align: right;">
                          {{ipAddress}}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Schema Changes -->
              <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; border-radius: 6px; margin-bottom: 30px;">
                <h3 style="margin: 0 0 15px; color: #333333; font-size: 16px; font-weight: 600;">Changes Detected:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #555555; font-size: 14px; line-height: 1.8;">
                  {{schemaChanges}}
                </ul>
              </div>
              
              <!-- Warning Message -->
              <div style="background-color: #fff3cd; border-left: 4px solid #ff9800; padding: 16px; border-radius: 6px; margin-bottom: 30px;">
                <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.6;">
                  <strong>⚠️ If you didn't make these changes,</strong> your database may have been accessed without authorization. Please review immediately and undo if necessary.
                </p>
              </div>
              
              <!-- Action Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px;">
                    <a href="{{dashboardUrl}}" style="display: inline-block; background-color: #667eea; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 15px; font-weight: 600; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);">
                      View Dashboard
                    </a>
                  </td>
                  <td align="center" style="padding: 10px;">
                    <a href="{{undoUrl}}" style="display: inline-block; background-color: #dc3545; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 15px; font-weight: 600; box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);">
                      Undo Changes
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 30px 0 0; color: #777777; font-size: 13px; line-height: 1.6; text-align: center;">
                Need help? <a href="{{supportUrl}}" style="color: #667eea; text-decoration: none;">Contact Support</a>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px; color: #999999; font-size: 12px;">
                This is an automated security notification from Dbify
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                © 2025 Dbify. All rights reserved.
              </p>
              <p style="margin: 15px 0 0; font-size: 12px;">
                <a href="{{unsubscribeUrl}}" style="color: #999999; text-decoration: underline;">Unsubscribe</a> | 
                <a href="{{privacyUrl}}" style="color: #999999; text-decoration: underline;">Privacy Policy</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const sendEmail = async ({ to, subject, html }) => {
  const emailHtml = schemaChangeHTML
    .replace('{{userName}}', "supersen14")
    .replace('{{projectName}}', "project_5")
    .replace('{{databaseName}}', "postgresql")
    .replace('{{changeType}}', "New table named demo Added")
    .replace('{{timestamp}}', new Date().toLocaleString())
    .replace('{{ipAddress}}', "192.168.1.100")
    .replace('{{schemaChanges}}', "<li>New table named 'demo' added</li>")
    .replace('{{dashboardUrl}}', `https://dbify.vercel.app/dashboard/5`)
    .replace('{{undoUrl}}', `https://dbify.vercel.app/undo/5`)
    .replace('{{supportUrl}}', 'https://dbify.vercel.app/support')
    .replace('{{unsubscribeUrl}}', `https://dbify.vercel.app/unsubscribe/5`)
    .replace('{{privacyUrl}}', 'https://dbify.vercel.app/privacy');

  const { data, error } = await resend.emails.send({
    from: "Dbify Security <onboarding@resend.dev>",
    to: to,
    subject: "⚠️ Database Schema Change Detected",
    html: emailHtml,
  });

  console.log(data);
  console.log("E", error);

  if (error) {
    return error;
  }
  return data;
};

sendEmail({
  to: "sahilkumar.231cs252@nitk.edu.in",
  subject: "Welcome to Dbify!",
  html: "welcome"
});

module.exports = { sendEmail };