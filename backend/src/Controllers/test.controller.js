const Dummy = require('../Models/dummy.model');
const axios = require('axios');
const testController = {
    submit: async (req, res, next) => {
      try {
        const formUrl = 'https://apply.oqvest.com/purchase';
  
        // Define the form data
        const formData = {
            full_name:'Shoaib Mehmood new',email:'shoaibmehmood065@gmail.com'
        };
  
        // Send the form data in the request body
        const response = await axios.post(formUrl, formData);
  
        console.log('successful', response);
        // You can also access the response data if needed
        // const responseData = response.data;
  
        res.status(200).send({ status: true, message: 'Form submitted successfully' });
      } catch (error) {
        console.error(error);
        res.status(400).send({ status: false, message: 'Failed to submit the form' });
      }
    }
  };
// const testController = {
//     submit: async (req, res, next) => {
//         try {
//             const formUrl = 'https://apply.oqvest.com/purchase';

//             // Define the form parameters
//             const formData = {
//               full_name:'Shoaib Mehmood new',email:'shoaibmehmood065@gmail.com'
//             };

//             const queryString = Object.keys(formData)
//                 .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`)
//                 .join('&');

//             const formSubmitUrl = `${formUrl}?${queryString}`;

//             axios.post(formSubmitUrl)
//                 .then(async(response) => {
//                     console.log('successfull', response);
//                     res.status(400).send({ status: true, message: 'submitted' });
//                 })
//                 .catch(error => {
//                     res.status(400).send({ status: false, message: error });
//                 });
//         } catch (error) {
//             res.status(400).send({ status: false, message: error });
//         }
//     }
// }

// const userObj = new Dummy(req.body);
            // const response = await Dummy.submit(userObj);
            // if (response) {
            //     res.status(200).send({ status: true, data: response, message: 'User registered successfully.' });
            // }

module.exports = testController;