const MeetUp =  require('../models/MeetUp');

exports.create = function(req, res, next){
    const description = req.body.description;
    const meetingTime = req.body.meetingTime;
    const name = req.body.name;
    const Address = req.body.Address;
    const meetUp = new MeetUp({
        name: name,
        description: description,
        Address: Address,
        meetingTime: meetingTime
    })
    return meetUp.save();
}


