
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'dogra.jitendra@innotiontech.com',
    from: 'megasoft909@gmail.com',
    subject: 'This is test email',
    text: 'Nodejs provide lib for sending email that is sendgrid/mail',
    html: '<strong>Nodejs provide lib for sending email that is sendgrid/mail easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg).then(() => {}, error => {
    console.error(error);
 
    if (error.response) {
      console.error(error.response.body)
    }
  });;