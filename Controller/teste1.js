var data =  require("../fakeData");

const getUser = ( req, res, next ) => {
    
    const name =  req.query.name;
    for(let i = 0; i < data.length;  i++) {
        console.log(data[i].name);
        console.log(name);
        if(data[i].name === name) {
        res.send(data[i]);
        }
    }

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};