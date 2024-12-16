let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thiago.sandrade0720@gmail.com',
        pass: 'estudante2017'
    }
});
