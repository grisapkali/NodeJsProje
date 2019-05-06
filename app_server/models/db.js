var mongoose = require('mongoose');

mongoose.Promise= require('bluebird');

var mongoDB ='mongodb://localhost/caner';

mongoose.connect(mongoDB,{ useNewUrlParser: true },function(err,err)
{
    if(err){
        console.log('mongoose hatasi'+err);
    }
    else{
        console.log('mongoose baglandi :'+mongoDB);
    }
})