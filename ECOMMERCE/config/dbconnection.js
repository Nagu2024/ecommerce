const mongoose = require('mongoose');

const dbconnection = () => {

    mongoose.connect(process.env.DBCONNECT).then((con) => {
        console.log('db connected' + con.connection.host);
    })
}

module.exports = dbconnection;