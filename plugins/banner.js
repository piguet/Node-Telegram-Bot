/*
    CONFIGURATION:
        https://github.com/vdemedes/google-images#set-up-google-custom-search-engine
*/

"use strict";

var Util = require('./../src/Util');

var request = require('request');
var crypto = require('crypto');
var fs = require('fs');

var banner = function() {

    // var CSE_ID = process.env.CSE_ID || "";
    // var CSE_API_KEY = process.env.CSE_API_KEY || "";

    this.properties = {
        inline: true,
        shortDescription: "Create banners on the fly",
        fullHelp: "`/led image - toptext - bottomtext \n"
    };

    // this.check = function() {
    //     console.log(CSE_API_KEY);
    //     console.log(CSE_API_KEY == "" ? false : true);
    //     return (CSE_ID == "" ? false : true) &&  (CSE_API_KEY == "" ? false : true);
    // };

    // this.on("init", function(callback){
    //     this.giClient = googleImages(CSE_ID, CSE_API_KEY);

    //     callback(null, this);
    // });

    this.on("text", function(msg, reply) {
        var query = Util.parseCommand(msg.text,["led"], {splitBy: "-"});
        // var query = Util.parseCommand(msg.text, ["meme", "!meme"], {
        //     joinParams: true, noRequireTrigger : true
        // });

        if (query != null) {
            var imageToFind = query[0];
            var toptext = query[1].split(' ').join('+');
            var toptext = toptext.toUpperCase();
            var downtext = query[2].split(' ').join('+');
            var downtext = downtext.toUpperCase();
            if (!query[2]){
            var downtext = query[1];
            var toptext = "";    
                       }
            
             if(imageToFind){
                 
                 
                
                  reply({ type: "status", status: "upload_photo" });
                  
                  var ledurl = "http://www.says-it.com/scripts/scientology.pl?text1=" + toptext + "&text2=" + downtext;
                  
                  Util.downloadAndSaveTempResource(ledurl, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
                 
                
             console.log("Led:" + imageToFind);

                
        }
        }
    });

this.on("inline_query", function (query, reply){
        var led = Util.parseInline(query.query,["led","!led"], {splitBy: "-"});
        if(led)
        {   
            if(led[1]){
                
            var toptext = led[1].split(' ').join(' ');
            var toptext = toptext.toUpperCase();
            var toptext = encodeURIComponent(toptext);
            // var downtext = led[2].split(' ').join('+');
            // var downtext = downtext.toUpperCase();
                // var urlscn = "http://www.says-it.com/scripts/scientology.pl?text1=" + toptext + "&text2="+ downtext;
                // var urlrvr = "http://www.says-it.com/scripts/csg-sign07.pl?text1=&text2=" + toptext + "&text3=&text4=" + downtext + "&text5=&tfont=1&htext";
                // var sam = "http://www.says-it.com/scripts/unclesam.pl?text1="+toptext+"&text2="+downtext+"&text3=&text4=";
                // var riverside = "http://www.says-it.com/scripts/marquee.pl?text1="+toptext+"%3A&text2="+downtext+"&text3=&font=1";
                
                var news = "http://www.imagegenerator.net/newscaster/image.php?headline=BREAKING+NEWS&text="+toptext+"";
                var einstein = "http://www.hetemeel.com/einsteinshow.php?text=++++++++++++++++++%0D%0A%0D%0A++"+toptext+"";
                //var street = "http://atom.smasher.org/streetparty/streetparty.jpg.php?l1=&l2="+toptext+"&l3="+downtext+"&l4=";
                var darth = "http://www.addletters.com/pictures/star-wars-i-am-your-father-caption-generator/star-wars-i-am-your-father-caption-generator.php?caption="+toptext+"";
                var conf = "http://pictureimage.whak.com/signs/confucius/default.aspx?pic=confucius2&text="+toptext+"&color=black&fontsize=22&move2=&move=&font=bonzai&allow=366500";
                var jes = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=black&color2=&watermark=&gradient=&spacing=&x=169&y=137&w=148&h=110&move=0&move2=&rotate=18&fontsize=16&text="+toptext+"&font=Verdana&allow=6128&pic=jesus-christ&align=Center&align2=Middle&transparency=255";
                var bart = "http://www.addletters.com/pictures/bart-simpson-generator/bart-simpson-generator.php?line="+toptext+"";
                var ledfreeway = "http://www.addletters.com/pictures/electronic-freeway-sign-generator/electronic-freeway-sign-generator.php?sign="+toptext+"";
                var ledsimp = "http://www.addletters.com/pictures/the-simpsons-title-screen-generator/the-simpsons-title-screen-generator.php?caption="+toptext+"";
                //var dr = "http://www.addletters.com/pictures/brain-age-doctor-ryuta-kawashima-image-generator/brain-age-doctor-ryuta-kawashima-image-generator.php?face=calm&caption="+toptext+"";
                // var nd = "http://www.addletters.com/pictures/napoleon-dynamite-wallpaper-generator/napoleon-dynamite-wallpaper-generator.php?shirt="+toptext+"&quote="+downtext+"";
                var nwp = "http://www.addletters.com/pictures/newspaper-generator/newspaper-generator.php?section=NEWS&headline="+toptext+"";
                var homer = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=yellow&color2=black&watermark=&gradient=&spacing=&x=187&y=34&w=219&h=258&move=0&move2=&rotate=&fontsize=20&text="+toptext+"&font=simpsons&allow=6128&pic=Speaker-Phone&align=Center&align2=Middle&transparency=255";
                var ledbg = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=black&color2=&watermark=&gradient=&spacing=&x=11&y=20&w=250&h=78&move=0&move2=&rotate=&fontsize=14&text="+toptext+"&font=Comic&allow=6128&pic=bill-gates-jr&align=center&align2=Middle&transparency=255";
                var ledwin = "http://pictureimage.whak.com/signs/parody/windows/bluescreen/default.aspx?text="+toptext+"&color=white&fontsize=12&move2=&move=&font=fixedsys&allow=366500&pic=bluescreen";
                var ledtwink = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=deeppink&color2=gray&watermark=&gradient=&spacing=&x=-35&y=370&w=270&h=158&move=0&move2=&rotate=-28&fontsize=38&text="+toptext+"&font=lovehand&allow=6128&pic=twink&align=Center&align2=Middle&transparency=255";
                var ledfbi = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=white&color2=black&watermark=&gradient=&spacing=&x=15&y=108&w=388&h=182&move=0&move2=&rotate=&fontsize=24&text="+toptext+"&font=signbold&allow=6128&pic=FBI-Warning&align=center&align2=Middle&transparency=255";
                var ledrnd = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=blue&color2=black&watermark=&gradient=red&spacing=&x=76&y=150&w=268&h=138&move=0&move2=&rotate=-1.4&fontsize=22&text="+toptext+"&font=Jester&allow=6128&pic=Proud-American&align=Center&align2=Middle&transparency=255";
                var ledfc = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=black&color2=&watermark=&gradient=&spacing=&x=131&y=204&w=145&h=118&move=0&move2=&rotate=&fontsize=16&text="+toptext+"&font=Psycho&allow=6128&pic=Fight-Club&align=center&align2=Middle&transparency=255";
                //var ledmed = "http://pictureimage.whak.com/signs/sign-generator/?allow=106&text="+toptext+"&font=HandItalic&color=black&fontsize=17&move2=48&move=80&rot=-2&pic=Medical-Prescription-Drugs&height=&width=&offx=5&offy=5&spacing=35&gradient=&tag=left&bubble=&bubH=&bubW=&watermark=&background=&border=&picURL=&shade=no&shadecolor=black";
                var ledtb = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=dimgray&color2=gainsboro&watermark=&gradient=&spacing=&x=124&y=60&w=268&h=157&move=0&move2=&rotate=-7&fontsize=26&text="+toptext+"&font=homework&allow=6128&pic=Tony-Blair-UK&align=Center&align2=Middle&transparency=255";
                var lednok = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=black&color2=&watermark=&gradient=&spacing=&x=117&y=187&w=219&h=174&move=0&move2=&rotate=&fontsize=18&text="+toptext+"&font=dotmatrix&allow=6128&pic=nokia-text-messaging&align=left&align2=Middle&transparency=255";
                var ledboobs = "http://pictureimage.whak.com/tits/fansigns/simple.aspx?pic=1-blonde-264-19-04-28-black-356-113-230-215-144-225.png&align=center&size=large&x=113&y=230&w=215&h=144&color=black&color2=&gradient=&spacing=&rotate=356&fontsize=28&text="+toptext+"%0D%0A&font=04&allow=36650&transparency=225&key=";
                var ledboobs2 = "http://pictureimage.whak.com/tits/fansigns/simple.aspx?pic=14-Kendra-0-0-14-28-black-358-109-475-240-144-175.png&align=center&size=large&x=109&y=475&w=240&h=144&color=black&color2=&gradient=&spacing=&rotate=358&fontsize=28&text="+toptext+"&font=14&allow=36650&transparency=175&key=";
                var ledboobs3 ="http://pictureimage.whak.com/tits/fansigns/simple.aspx?pic=74-goatse_cx-0-0-25-22-black-2-170-130-124-111-225.png&align=center&size=large&x=170&y=130&w=124&h=111&color=black&color2=&gradient=&spacing=&rotate=2&fontsize=22&text="+toptext+"&font=25&allow=36650&transparency=225&key=";
                var ledboobs4 = "http://pictureimage.whak.com/tits/fansigns/simple.aspx?pic=0-livingroom-264-19-03-22-darkred-1-185-300-163-125-175.png&align=center&size=large&x=185&y=300&w=163&h=125&color=darkred&color2=&gradient=&spacing=&rotate=1&fontsize=22&text="+toptext+"&font=03&allow=36650&transparency=175&key=";
                var ledboobs5 = "http://pictureimage.whak.com/tits/fansigns/simple.aspx?pic=2-black_beauty-264-19-08-20-blue-354-225-347-180-120-150.png&align=center&size=large&x=225&y=347&w=180&h=120&color=blue&color2=&gradient=&spacing=&rotate=354&fontsize=20&text="+toptext+"&font=08&allow=36650&transparency=150&key=";
                var ledboobs6 = "http://pictureimage.whak.com/tits/fansigns/simple.aspx?pic=40-naughty_nice-499-618-07-18-darkblue-5-235-311-185-135-200.png&align=center&size=large&x=235&y=311&w=185&h=135&color=darkblue&color2=&gradient=&spacing=&rotate=5&fontsize=18&text="+toptext+"&font=07&allow=36650&transparency=200&key=";
                
                
                
                var ledalert = "http://pictureimage.whak.com/signs/danger/default.aspx?text="+toptext+"&color=black&fontsize=14&move2=&move=&font=stencil&allow=366500&pic=bright-caution";
                var ledblue = "http://dummyimage.com/600x400/003dd6/ffffff&text="+toptext;
                var ledblack ="http://dummyimage.com/600x400/000000/00ff73.png&text="+toptext;
                var ledballon1 = "http://nfggames.com/system/arcade/arcade.php/y-kof97i/z-0/dbl-5/x-"+toptext;
                
                var resultsbanner = [
                // {id:"0", type:'photo',photo_url: urlscn, thumb_url: urlscn ,photo_width: 1000,photo_height: 1000 },
                {id:"0", type:'photo',photo_url: darth ,thumb_url: darth ,photo_width: 1000,photo_height: 600 },
                // {id:"2", type:'photo',photo_url: sam ,thumb_url: sam ,photo_width: 1000,photo_height: 1000 },
                // {id:"3", type:'photo',photo_url: riverside ,thumb_url: riverside ,photo_width: 1000,photo_height: 1000 },
                // {id:"1", type:'photo',photo_url: news ,thumb_url: news ,photo_width: 1000,photo_height: 600 },
                 {id:"2", type:'photo',photo_url: einstein ,thumb_url: einstein ,photo_width: 1000,photo_height: 600 },
                //  {id:"6", type:'photo',photo_url: street ,thumb_url: street ,photo_width: 1000,photo_height: 600 },
                 {id:"3", type:'photo',photo_url: conf ,thumb_url: conf ,photo_width: 600,photo_height: 1000 },
                {id:"4", type:'photo',photo_url: jes ,thumb_url: jes ,photo_width: 600,photo_height: 1000 },
                {id:"5", type:'photo',photo_url: bart ,thumb_url: bart ,photo_width: 1000,photo_height: 600 },
                
                {id:"6", type:'photo',photo_url: ledfreeway ,thumb_url: ledfreeway ,photo_width: 1000,photo_height: 600 },
                {id:"7", type:'photo',photo_url: ledsimp ,thumb_url: ledsimp ,photo_width: 1000,photo_height: 600 },
                //{id:"8", type:'photo',photo_url: dr ,thumb_url: dr ,photo_width: 1000,photo_height: 600 },
                // {id:"13", type:'photo',photo_url: nd ,thumb_url: nd ,photo_width: 1000,photo_height: 600 },
                {id:"9", type:'photo',photo_url: nwp ,thumb_url: nwp ,photo_width: 1000,photo_height: 600 },
                {id:"10", type:'photo',photo_url: homer ,thumb_url: homer ,photo_width: 1000,photo_height: 1000 },
                {id:"11", type:'photo',photo_url: ledbg ,thumb_url: ledbg ,photo_width: 1000,photo_height: 1000 },
                {id:"12", type:'photo',photo_url: ledwin ,thumb_url: ledwin ,photo_width: 1000,photo_height: 600 },
                {id:"13", type:'photo',photo_url: ledtwink ,thumb_url: ledtwink ,photo_width: 1000,photo_height: 600 },
                {id:"14", type:'photo',photo_url: ledfbi ,thumb_url: ledfbi ,photo_width: 1000,photo_height: 1000 },
                {id:"15", type:'photo',photo_url: ledrnd ,thumb_url: ledrnd ,photo_width: 1000,photo_height: 600 },
                {id:"16", type:'photo',photo_url: ledfc ,thumb_url: ledfc ,photo_width: 1000,photo_height: 1000 },
                //{id:"17", type:'photo',photo_url: ledmed ,thumb_url: ledmed ,photo_width: 600,photo_height: 1000 },
                {id:"18", type:'photo',photo_url: ledtb ,thumb_url: ledtb ,photo_width: 1000,photo_height: 600 },
                {id:"19", type:'photo',photo_url: lednok ,thumb_url: lednok ,photo_width: 1000,photo_height: 800 },
                {id:"20", type:'photo',photo_url: ledboobs ,thumb_url: ledboobs ,photo_width: 700,photo_height: 1000 },
                {id:"21", type:'photo',photo_url: ledboobs2 ,thumb_url: ledboobs2 ,photo_width: 700,photo_height: 1000 },
                {id:"22", type:'photo',photo_url: ledboobs3 ,thumb_url: ledboobs3 ,photo_width: 700,photo_height: 1000 },
                {id:"23", type:'photo',photo_url: ledboobs4 ,thumb_url: ledboobs4 ,photo_width: 700,photo_height: 1000 },
                {id:"24", type:'photo',photo_url: ledboobs5 ,thumb_url: ledboobs5 ,photo_width: 1000,photo_height: 700 },
                {id:"25", type:'photo',photo_url: ledboobs6 ,thumb_url: ledboobs6 ,photo_width: 1000,photo_height: 700 },
                
                 {id:"8", type:'photo',photo_url: ledalert ,thumb_url: ledalert ,photo_width: 1000,photo_height: 500 },
                  {id:"26", type:'photo',photo_url: ledblue ,thumb_url: ledblue ,photo_width: 640,photo_height: 480 },
                  {id:"27", type:'photo',photo_url: ledblack ,thumb_url: ledblack ,photo_width: 640,photo_height: 480 },
                  {id:"28", type:'photo',photo_url: ledballon1 ,thumb_url: ledballon1 ,photo_width: 700,photo_height: 100 },
                ];
                reply(resultsbanner);
            }
        }
    });


};

module.exports = banner;
