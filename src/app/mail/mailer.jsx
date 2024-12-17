import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    secure: true,
    port: 465,
    auth: {
      user: 'resend',
      pass: process.env.RESEND_API_KEY,
    },
  });

  // Configure the mailoptions object
const mailOptions = {
    from: 'yourusername@email.com',
    to: 'thiago.sandrade0720@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  