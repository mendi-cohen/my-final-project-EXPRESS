const nodeoutlook = require('nodejs-nodemailer-outlook');

class FormsController {
  async sendEmail(req, res) {
  
    const { toEmail, messageBody } = req.body;

    try {
      nodeoutlook.sendEmail({
        auth: {
          user: "mcrambam770@gmail.com",
          pass: "mcr12377070070",
        },
        from: 'mcrambam770@gmail.com',
        to: toEmail,
        subject: '!  ב"ה הצלחתי לשלוח לך אימייל מהאפליקציה ',
        html: 'בדיקת שליחת האימייל ',
        text: 'This is text version!',
        replyTo: 'mcrambam770@gmail.com',
        
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

module.exports = new FormsController();
