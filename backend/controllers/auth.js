var User = require('../models/User');

module.exports = {
    register: function (req, res) {
        console.log(req.body);

        User.findOne({
            email: req.body.email
        }, function (err, existingUser) {
            if (existingUser) {
                return res.status(409).send('Email is already taken');
            }

            var user = new User(req.body);

            user.save(function (err, result) {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    });
                }
                res.status(200);
            });
        });
    }
};
