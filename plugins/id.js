var Util = require('./../src/Util');

var ventriloquist = function(){

    this.properties = {
        shortDescription: "Echo. What else?",
        fullHelp: "Use `/echo <message>` to make the bot echo `<message>`."
    };

    this.on("text", function (msg, reply){
        var matchEcho = Util.parseCommand(msg.text,["!id"], { joinParams: true, noRequireTrigger:true });  


        if (matchEcho)
            if(matchEcho[0])
            {
                
               /* if(Util.startsWith(text,"!") || Util.startsWith(text,"/"))
                    reply({type: 'text', text: "I am not echoing that."}); 
                else */
                    reply({type: 'idchat', text: matchEcho[1]}); 
            }
    });

};

module.exports = ventriloquist;