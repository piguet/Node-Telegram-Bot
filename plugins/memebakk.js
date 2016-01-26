/*
    CONFIGURATION:
        https://github.com/vdemedes/google-images#set-up-google-custom-search-engine
*/

"use strict";

var Util = require('./../src/Util');
var googleImages = require('google-images');
var captainApi = require('node-memecaptain-api');
var request = require('request');
var crypto = require('crypto');
var fs = require('fs');

var meme = function() {

    var CSE_ID = process.env.CSE_ID || "";
    var CSE_API_KEY = process.env.CSE_API_KEY || "";

    this.properties = {
        inline: false,
        shortDescription: "Create memes on the fly starting from a google image search",
        fullHelp: "`/meme image - toptext - bottomtext \n\n beware it's veeery slow!!"
    };

    this.check = function() {
        console.log(CSE_API_KEY);
        console.log(CSE_API_KEY == "" ? false : true);
        return (CSE_ID == "" ? false : true) &&  (CSE_API_KEY == "" ? false : true);
    };

    this.on("init", function(callback){
        this.giClient = googleImages(CSE_ID, CSE_API_KEY);

        callback(null, this);
    });

    this.on("text", function(msg, reply) {
        var query = Util.parseCommand(msg.text,["meme"], {splitBy: "-"});
        // var query = Util.parseCommand(msg.text, ["meme", "!meme"], {
        //     joinParams: true, noRequireTrigger : true
        // });

        if (query != null) {
            var imageToFind = query[1];
            var toptext = query[2];
            var downtext = query[3];
            if (!query[3]){
            var downtext = query[2];
            var toptext = "";    
            }
            
            if(imageToFind){
                
             console.log("Google Image:" + imageToFind);

                this.giClient.search(imageToFind).then(function(results){

                    var rnd = Math.floor(Math.random() * results.length);
                    var result = results[rnd];
                    var url = result["url"];
                    
                    
        //       captainApi.createImage(url,
        //      'various').then(function(result) {
        //         var sourceid = result.id;
                
        //         setTimeout(function(){
        //           captainApi.createMeme(sourceid, toptext, downtext)
        //   .then(function(memeUrl) {
        //       var urlm = memeUrl;// use generated meme
        //       //reply({type: 'text', text: urlm});
        //       reply({
        //             type: "status",
        //             status: "upload_photo"
        //         });
        //       Util.downloadAndSaveTempResource(urlm, "png", function(fn){
        //                 reply({type: 'photo', photo: fn});
        //             });
        //   });
                 
        //      },18000);
                
                
                
        //          //reply({type: 'text', text: result.id});
        //      }, function(err2) {
        //          reply({type: 'text', text: err2});
        //      });
             
             var memurl = "http://pokertour.altervista.org/meme/?top_text="+toptext+"&bottom_text="+downtext+"&imageURL="+url;
             
            
              Util.downloadAndSaveTempResource(memurl, "png", function(mm){
                  
                  setTimeout(function(){
                       reply({
                    type: "status",
                    status: "upload_photo"
                });
                        reply({type: 'photo', photo: mm});
                  },4000); 
                    });
             
             
             
    

             
            
             
                });
            }
        }
    });

    /* this.on("inline_query", function(query, reply) {
        var args = Util.parseInline(query.query,["i","!i","img","!img"], { joinParams: true });

        if (args != null) {
            query = args[1];

            if(query)
            {
                console.log("Google Image inline:" + query);


                this.giClient.search(query).then(function(results){


                    if(results)
                    {
                        var answers = [];

                        for(var i=0; i<results.length; i++){

                            answers.push({
                                id: ""+i,
                                type: "photo",
                                photo_url: results[i].url,
                                thumb_url: results[i].thumbnail.url,
                                photo_width: results[i].width,
                                photo_height: results[i].height,
                            });
                        }
                        reply(answers);
                    }
                });
            }
        }
    });*/
};

module.exports = meme;