var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var kullaniciSchema=new Schema({
    ad:String,
    tcNo:String,
    kartid:String,
    sonTarih:Date,
    ilkSaat:String,
    sonSaat:String,
    yetki:String,
},{collection:'kullanicilar'});

var Kullanici = mongoose.model('Kullanici',kullaniciSchema);

module.exports=Kullanici;