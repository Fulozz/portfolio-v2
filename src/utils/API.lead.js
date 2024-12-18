const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const URL = "https://portfolio-backend-zpig.onrender.com/api/v1";
export default () => axios.create({
    baseURL: URL,
    body: {
        'Content-Type': 'application/json',
    }

})