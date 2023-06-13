const Dummy = require('../Models/dummy.model');

const testController = {
    submit: async (req, res, next) => {
        try {
            const userObj = new Dummy(req.body);
            const response = await Dummy.submit(userObj);
            if (response) {
                res.status(200).send({ status: true, data: response, message: 'User registered successfully.' });
            }
        } catch (error) {
            res.status(400).send({ status: false, message: error });
        }
    }
}



module.exports = testController;