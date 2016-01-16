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

var boni= function(){

    this.properties = {
        shortDescription: "Get a random watfrom the `wats` file.",
        fullHelp: "`wat` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var match = Util.parseCommand(msg.text,["boni","Boni","BONI","boni!","bboni"], {noRequireTrigger: true });  
        
        if(match)
        {
            choice = Math.floor(Math.random() * 5);

            
             reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/boni/" + choice + ".jpg";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
    });

};

module.exports = boni;