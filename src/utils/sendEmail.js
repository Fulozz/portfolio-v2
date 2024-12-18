const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

export const sendEmail = async (data) => {
    const URL = "https://portfolio-backend-zpig.onrender.com/api/v1/mailer";
    try {
        const response = await axios.post(URL, {
            data
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}