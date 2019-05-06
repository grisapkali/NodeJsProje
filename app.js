//FORM ELEMANLARININ POST METODU ILE YOLLANMASI

var fs=require('fs');
var express = require('express'),
    app = express();
  //  io = require('socket.io').listen("8500");
var path=require('path');
//var rc522 = require("rc522");
var ejsLayouts=require('express-ejs-layouts');
var bodyParser=require('body-parser');
var db = require('./app_server/models/db')
console.log("App successfully launched!"); 

app.set('view engine', 'ejs')

app.set('views',path.join(__dirname,'/app_server/views'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(ejsLayouts);

app.use('/public',express.static(path.join(__dirname,'public')));
//rc522(function(rfidSerialNumber){
//	io.sockets.emit("rfid", rfidSerialNumber); // Sends the RFID Serial Number through Socket.IO
//  	console.log(rfidSerialNumber);
//});

require('./app_server/routes/routeManage')(app)

var Kullanici = require('./app_server/models/kullanici');

var yeniKullanici = new Kullanici({
    ad:'Caner',
    tcNo:'19940117754',
    kartid:'b123456789',
    sonTarih: new Date(),
    ilkSaat:'11:11',
    sonSaat:'22:22',
    yetki:'ogrenci',
});

yeniKullanici.save(function(err)
{
    if(err){
        console.log(err);
    }
    else{
        console.log("Kullanici kaydedildi.");
    }
});

app.listen(8080);