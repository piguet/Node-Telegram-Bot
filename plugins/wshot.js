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
var webshot = require('webshot');
var wshot= function(){

    this.properties = {
        shortDescription: "Get a random watfrom the `wats` file.",
        fullHelp: "`wat` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var match = Util.parseCommand(msg.text,["wshot"], {noRequireTrigger: true });  
        
        if(match)
        {
            // choice = Math.floor(Math.random() * 21);

            
            //  reply({ type: "status", status: "upload_photo" });
            //  url = "http://pokertour.altervista.org/pictures/wat/" + choice + ".jpg";
            //  Util.downloadAndSaveTempResource(url, "png", function(fn){
            //             reply({ type: "photo", photo: fn });
            //         });
            
            var gnoptions = {
//   screenSize: {
//     width: 320
//   , height: 480
//   }
 shotSize: {
   
   height: 'all'
  }};
  
            webshot('http://www.google.com/gwt/x?u=http%3A%2F%2Fwww.gnoccatravels.com%2Fviaggiodellagnocca%2F2132%2Fgnoccatravel-a-miami-il-1-maggio-2012-chi-viene&noimg=1&btnGo=Vai&source=wax&ie=UTF-8&oe=UTF-8', 'google.png',gnoptions, function(err) {
  reply({ type: "status", status: "upload_photo" });
  reply({ type: "photo", photo: 'google.png' });
  
});
        }
    });

};

module.exports = wshot;