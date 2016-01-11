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

var wat= function(){

    this.properties = {
        shortDescription: "Get a random watfrom the `wats` file.",
        fullHelp: "`wat` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var match = Util.parseCommand(msg.text,["wat","WAT","Wat","wtf","WTF","Wtf"], {noRequireTrigger: true });  
        
        if(match)
        {
            choice = Math.floor(Math.random() * 21);

            
             reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/wat/" + choice + ".jpg";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
    });

};

module.exports = wat;