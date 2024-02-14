const nodeoutlook = require('nodejs-nodemailer-outlook');

class EmailController {
  async sendEmail(req, res) {
  
    const { toEmail, messageBody } = req.body;

    try {
      nodeoutlook.sendEmail({
        auth: {
          user: `${process.env.EMAIL_NAME}`,
          pass: `${process.env.EMAIL_PASS}`,
        },
        from: `${process.env.EMAIL_NAME}`,
        to: toEmail,
        html: messageBody,
        text: 'This is text version!',
        replyTo: `${process.env.EMAIL_NAME}`,
        
        onError: (e) => {
          console.log(e);
          res.status(500).send('Error sending SMS and email');
        },
        onSuccess: (i) => {
          console.log(i);
          res.status(200).send('SMS and email sent successfully!');
        }
      });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  }
}

module.exports = new EmailController();
