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

var varie = function(){

    this.properties = {
        shortDescription: "Get a random watfrom the `wats` file.",
        fullHelp: "`wat` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var diablo = Util.parseCommand(msg.text,["666","diablo","Diablo"], {noRequireTrigger: true });  
        var alessio = Util.parseCommand(msg.text,["uba","Uba","Alessio","alessio","Alessi","alessi"], {noRequireTrigger: true });
        var fede = Util.parseCommand(msg.text,["fede","Fede","Miso","miso"], {noRequireTrigger: true });
        var figata = Util.parseCommand(msg.text,["wow","Wow","figata","Figata","Figo","bello"], {noRequireTrigger: true });
        var selva = Util.parseCommand(msg.text,["Selva","selvaggio","Silvano","selva","silvano"], {noRequireTrigger: true });
        if(diablo)
        {
            reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/varie/666.jpg";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
        if(alessio)
        {
            reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/varie/alessio.jpg";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
        if(fede)
        {
            reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/varie/fede.jpg";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
        if(figata)
        {
            reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/varie/fuck.gif";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
         if(selva)
        {
            reply({ type: "status", status: "upload_photo" });
             url = "http://pokertour.altervista.org/pictures/varie/selva.png";
             Util.downloadAndSaveTempResource(url, "png", function(fn){
                        reply({ type: "photo", photo: fn });
                    });
        }
    });

};

module.exports = varie;