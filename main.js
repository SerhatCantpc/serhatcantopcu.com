var express = require("express");
var app = express();
var html = require("html")
var ejs = require("ejs")
var ejsLayouts=require('express-ejs-layouts')
app.set('view engine','ejs');
app.set('views','./views')
app.use("/public", express.static(__dirname + "/public"));
app.use("/sablons", express.static(__dirname + "/sablons"));

var tcpp = require('tcp-ping');
var pingarea = "google.com"
tcpp.probe(pingarea, 80, function(err, available) {
    console.log(pingarea, ' Adresine Bağlantı Testi Yapılıyor' ,available);
});

tcpp.ping({ address: pingarea }, function(err, data) {
    console.log(pingarea,' Adresine Ping Testi Yapılıyor' ,data);
});

//// Bitti ////

//// Server ////
var port = 3000
var server = app.listen(port, function(){
    console.log("Sunucu şu anda port numarasında açılıyor:", port );
    console.log('Sunucu şu anda ', port, ' portunda ve ', port, ' adresinde çalışmaya başladı')
});



app.use(express.static("public"));
app.use("/public", express.static(__dirname + "/public"));

//CSS JS ÇALIŞMASI İÇİN #ŞABLONLAR
app.use(express.static("assets"));
app.use("/assets", express.static(__dirname + "/assets"));




//AŞAĞISI SAYFA EKLEME KISMI

app.get("/", function(req, res){
    res.render("index.ejs")
})


//ŞABLONLAR KISMI

app.get("/sablonlar", function(req, res){
  res.render("sablonlar.ejs")
})

//ALT KATEGORİLER

//dcbotsite1
app.get("/sablonlar/dcbotsite1/index", function(req, res){
  res.render("dcbotsite1/index.ejs")
})

//yetkilipaneli1
app.get("/sablonlar/yetkilipaneli1/index", function(req, res){
  res.render("yetkilipaneli1/index.ejs")
})

