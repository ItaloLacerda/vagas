var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    // var name =  req.query.name;

    // for(let i = 0; i < data.length;  i++) {
    //     if(i.name == name) {
    //         res.send(data[i]);
    //     }
    // }
    return res.status(200).json({ ok: 'NOK' });

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};