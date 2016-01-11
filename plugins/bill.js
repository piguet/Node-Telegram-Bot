/*
    DESCRIPTION: 
        Get a random line from the bills file

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

var bill= function(){

    this.properties = {
        shortDescription: "Get a random billfrom the `bills` file.",
        fullHelp: "`bill` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var match = Util.parseCommand(msg.text,["bill","Bill","BILL"], {noRequireTrigger: true });  
        
        if(match)
        {
            choice = Math.floor(Math.random() * 10);

            
             reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/bill/" + choice + ".jpg";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
    });

};

module.exports = bill;