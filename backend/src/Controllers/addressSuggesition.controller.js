const axios = require('axios');

const addressSuggesitionController = {
    get: async (req, res, next) => {
        try {
            const apiUrl = `https://nominatim.openstreetmap.org/search?q=${req.query.address}&format=json`;
            const response = await axios.get(apiUrl);
            if(response.data.length > 0) {
                const data = response.data.map((data)=> ({
                    address: data.display_name
                }));
                res.status(200).send({status: true, data});
            } else {
                res.status(200).send({status: true, data: response.data});
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = addressSuggesitionController;