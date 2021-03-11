const Users =  require('../models/users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


exports.getUsers = function(req, res, next){
    Users.find().select('_id name email').then(results =>{
        return res.status(200).json({
            code: 200,
            status: "SUCCESS",
            results: results
        })
    });
}

exports.saveUsers = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(200).json(errors.array())
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // encrypting the password
    bcrypt.hash(password, 12).then(hashPassword => {
        console.log(hashPassword)
        const user = new Users({
            name: name,
            email: email,
            password: hashPassword
        })
       return user.save();
    }).then(results => {
            res.mailer.send('email', {
                to: email, // REQUIRED. This can be a comma delimited string just like a normal email to field. 
                subject: 'Registration Successful', // REQUIRED
                data: {
                    name: name,
                    title: 'Registration Successful',
                    button: {
                        required: false
                    }
                }
            }, function (err) {
                if (err) {
                // handle error
                    console.log(err);
                    return res.status(502).json({
                        code: 502,  
                        message: 'There was an error sending the email',
                        status: 'FAILED'
                    });
                }
            return res.status(201).json({
                code: 201,
                status: "SUCCESS",
                message: 'user successfully created',
                userId: results._id
            });
        });
    })
    
}

exports.login = (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return  res.status(422).json(errors.array());
    }
    const email = req.body.email;
    const password =  req.body.password;

    Users.findOne({email: email}).then(user => {
        // console.log(user);
        if(!user){
          return res.status(200).json({
                code: 200,
                status: "error",
                message: "E-mail address not found"
            })
        }else{
            bcrypt.compare(password, user.password).then(isEqual => {
                console.log(isEqual)
                res.json({
                    code: 200,
                    status: "SUCCESS",
                    message: 'login successfull',
                    results:{
                        id: user._id,
                        email: user.email,
                    }
                })
            })

        }
    }).catch(err => {
        console.log(err)
    })

    // res.send('working');
}

