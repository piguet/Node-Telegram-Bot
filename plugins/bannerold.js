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
        var args = Util.parseInline(query.query,["led","!led"], {splitBy: "-"});
        if(args)
        {   
            if(args[1]){
                
            var toptext = args[1].split(' ').join('+');
            var toptext = toptext.toUpperCase();
            var downtext = args[2].split(' ').join('+');
            var downtext = downtext.toUpperCase();
                var urlscn = "http://www.says-it.com/scripts/scientology.pl?text1=" + toptext + "&text2="+ downtext;
                var urlrvr = "http://www.says-it.com/scripts/csg-sign07.pl?text1=&text2=" + toptext + "&text3=&text4=" + downtext + "&text5=&tfont=1&htext";
                var results = [
                {id:"0", type:'article', title:'titolo1', message_text:'messaggio'},
                {id:"1", type:'article', title:'titolo2', message_text:'messaggio2'}];
                reply(results);
            }
        }
    });


};

module.exports = banner;