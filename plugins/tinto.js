/*
    DESCRIPTION: 
        Get a random line from the tintos file

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

var tinto = function(){

    this.properties = {
        shortDescription: "Get a random tinto from the `tintos` file.",
        fullHelp: "`/tinto` is all you need to have fun."
    };

    tinto = [];

    this.on("init", function (done){
        var self = this;

        fs.readFile("./files/tinto",'utf8', function(err, data) {
            if(err) {
                return done(err, null);
            }
            tinto = data.toString().split("\n");
            console.log("\ttinto: file loaded");
            return done(null, self);
        }); 
    });

    
    this.on("text", function (msg, reply){
        var match = Util.parseCommand(msg.text,["tinto","Tinto","TINTO"], {noRequireTrigger: true });  
        
        if(match)
        {
            choice = Math.floor(Math.random() * tinto.length);

            reply({type: 'text', text: "_\"" + tinto[choice] + "\"_ \n\n Tinto Brass", options:{parse_mode: "Markdown"}});
        }
    });

};

module.exports = tinto;