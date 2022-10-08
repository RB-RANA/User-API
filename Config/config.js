
require('dotenv').config()

const div={

app:{
    port:process.env.PORT || 4000,
},

db:{
    url:process.env.DB_URL || 'mongobd://localhost:27017/Damo-01'
},

}

module.exports=div;