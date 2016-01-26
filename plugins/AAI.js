/*
    DESCRIPTION: 
        Get a random line from the wats file

    AUTHOR: 
        Cristian Baldi

    COMMANDS:
        !q

    EXAMPLE:
        You: !q
        Bot: This is Sparta!
*/
var Util = require('./../src/Util');
var fs = require('fs');
var google = require('google');
var AAI = function(){

    this.properties = {
        shortDescription: "AAI",
        fullHelp: "Automatic Artificial Intelligence"
    };

    

    

    
    this.on("text", function (msg, reply){
        
        var AIrandomizer = Math.floor(Math.random() * 2);
        //if (AIrandomizer==1)
        var AAImatch = msg.text;
        
        
        if(AAImatch)
        {
                        
                                google.lang = 'it';
                                google.tld = 'it';
            google.nextText = 'Avanti';

                                google.resultsPerPage = 50;
                                var nextCounter = 0;
                                AAImatch = AAImatch+" -facebook -traduci -traduzione -translate";
                                google(AAImatch, function (err, next, links){
                                var AAIchoice = Math.floor(Math.random() * 50);
                                  if (err) console.error(err);
                                  var descrpt = links[AAIchoice].description;
                                  var cleandescr = descrpt.split('.')[0];
                                 var descrpt = descrpt.replace(/^(0?[1-9]|[12][0-9]|3[01])[\s\-\.](gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)[\s\-\.](\d*)[\s\-\.](\.+\s)/g, "");
                                  
                                  var cleandescr = descrpt.split('...')[0];
                                  //var cleandescr2 = descrpt.split('...')[1];
                                    reply({type: 'text', text: cleandescr ,options: { reply_to_message_id: msg.message_id }}); 
                                  
                                //   if (nextCounter < 4) {
                                //      nextCounter += 1
                                //      if (next) next()
                                //   }
                                });
                            



            
            //  reply({ type: "status", status: "upload_photo" });
            //  url = "http://pokertour.altervista.org/pictures/wat/" + choice + ".jpg";
            //  Util.downloadAndSaveTempResource(url, "png", function(fn){
            //             reply({ type: "photo", photo: fn });
            //         });
        }
    });

};

module.exports = AAI;