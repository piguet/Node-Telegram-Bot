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

var siocchino= function(){

    this.properties = {
        shortDescription: "Scarica lo siocchino selezionato",
        fullHelp: "es siocchino 6"
    };

    

    

    
    this.on("text", function (msg, reply){
        var sioc = Util.parseCommand(msg.text,["Siocchino","siocchino"], {noRequireTrigger: true}); 
        
        
        if(sioc)
        {var nr = sioc[1];
            
 
            
            
            var url = "http://fantasiocchi.altervista.org/siocchini/Siocchino"+nr+".pdf";
             Util.downloadAndSaveTempResource(url, "pdf", function(fn){
                        reply({ type: "text", text: url });
                    });
        }
    });

};

module.exports = siocchino;