var path=require('path');

module.exports.loginGet=function(req,res){
    res.render('login');
}

module.exports.loginPost=function(req,res){
    console.log(req.body)
    res.render('login',{
        Kullanici:req.body.username,
        Sifre:req.body.idNumber
    });
}