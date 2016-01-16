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
                  
                  var url = "http://www.says-it.com/scripts/scientology.pl?text1=" + toptext + "&text2=" + downtext;
                  
                  Util.downloadAndSaveTempResource(url, "png", function(fn){
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
                var conf = "http://pictureimage.whak.com/signs/confucius/default.aspx?pic=confucius&text="+toptext+"%0D%0A&color=black&fontsize=22&move2=&move=&font=bonzai&allow=326500";
                var jes = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=black&color2=&watermark=&gradient=&spacing=&x=169&y=137&w=148&h=110&move=0&move2=&rotate=18&fontsize=16&text="+toptext+"&font=Verdana&allow=6128&pic=jesus-christ&align=Center&align2=Middle&transparency=255";
                var bart = "http://www.addletters.com/pictures/bart-simpson-generator/bart-simpson-generator.php?line="+toptext+"";
                var ledfreeway = "http://www.addletters.com/pictures/electronic-freeway-sign-generator/electronic-freeway-sign-generator.php?sign="+toptext+"";
                var ledsimp = "http://www.addletters.com/pictures/the-simpsons-title-screen-generator/the-simpsons-title-screen-generator.php?caption="+toptext+"";
                var dr = "http://www.addletters.com/pictures/brain-age-doctor-ryuta-kawashima-image-generator/brain-age-doctor-ryuta-kawashima-image-generator.php?face=calm&caption="+toptext+"";
                // var nd = "http://www.addletters.com/pictures/napoleon-dynamite-wallpaper-generator/napoleon-dynamite-wallpaper-generator.php?shirt="+toptext+"&quote="+downtext+"";
                var nwp = "http://www.addletters.com/pictures/newspaper-generator/newspaper-generator.php?section=NEWS&headline="+toptext+"";
                var homer = "http://pictureimage.whak.com/signs/sign-generator/simple.aspx?color=yellow&color2=black&watermark=&gradient=&spacing=&x=187&y=34&w=219&h=258&move=0&move2=&rotate=&fontsize=20&text="+toptext+"&font=simpsons&allow=6128&pic=Speaker-Phone&align=Center&align2=Middle&transparency=255";
                var results = [
                // {id:"0", type:'photo',photo_url: urlscn, thumb_url: urlscn ,photo_width: 1000,photo_height: 1000 },
                {id:"0", type:'photo',photo_url: darth ,thumb_url: darth ,photo_width: 1000,photo_height: 600 },
                // {id:"2", type:'photo',photo_url: sam ,thumb_url: sam ,photo_width: 1000,photo_height: 1000 },
                // {id:"3", type:'photo',photo_url: riverside ,thumb_url: riverside ,photo_width: 1000,photo_height: 1000 },
                {id:"1", type:'photo',photo_url: news ,thumb_url: news ,photo_width: 1000,photo_height: 600 },
                 {id:"2", type:'photo',photo_url: einstein ,thumb_url: einstein ,photo_width: 1000,photo_height: 600 },
                //  {id:"6", type:'photo',photo_url: street ,thumb_url: street ,photo_width: 1000,photo_height: 600 },
                 {id:"3", type:'photo',photo_url: conf ,thumb_url: conf ,photo_width: 600,photo_height: 1000 },
                {id:"4", type:'photo',photo_url: jes ,thumb_url: jes ,photo_width: 600,photo_height: 1000 },
                {id:"5", type:'photo',photo_url: bart ,thumb_url: bart ,photo_width: 1000,photo_height: 600 },
                
                {id:"6", type:'photo',photo_url: ledfreeway ,thumb_url: ledfreeway ,photo_width: 1000,photo_height: 600 },
                {id:"7", type:'photo',photo_url: ledsimp ,thumb_url: ledsimp ,photo_width: 1000,photo_height: 600 },
                {id:"8", type:'photo',photo_url: dr ,thumb_url: dr ,photo_width: 1000,photo_height: 600 },
                // {id:"13", type:'photo',photo_url: nd ,thumb_url: nd ,photo_width: 1000,photo_height: 600 },
                {id:"9", type:'photo',photo_url: nwp ,thumb_url: nwp ,photo_width: 1000,photo_height: 600 },
                {id:"10", type:'photo',photo_url: homer ,thumb_url: homer ,photo_width: 1000,photo_height: 600 },
                ];
                reply(results);
            }
        }
    });


};

module.exports = banner;
