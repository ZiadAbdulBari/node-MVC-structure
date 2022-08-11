require('dotenv').config();

const dev={
    app:{
        port:process.env.PORT || 3000,
    },
    bd:{
        url:process.env.BD_URL
    }
}

module.exports = dev;