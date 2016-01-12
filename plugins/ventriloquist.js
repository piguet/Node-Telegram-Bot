var Util = require('./../src/Util');

var ventriloquist = function(){

    this.properties = {
        shortDescription: "Echo. What else?",
        fullHelp: "Use `!pig <message>` in a private chat to make the bot talk in the group defined by `wormhole` in bot.js ."
    };

    this.on("text", function (msg, reply){
        var matchEcho = Util.parseCommand(msg.text,["!pig"], { joinParams: true, noRequireTrigger:true });  


        if (matchEcho)
            if(matchEcho[1])
            {
                text = matchEcho[1];
               /* if(Util.startsWith(text,"!") || Util.startsWith(text,"/"))
                    reply({type: 'text', text: "I am not echoing that."}); 
                else */
                    reply({type: 'wormhole', text: matchEcho[1]}); 
            }
    });

};

module.exports = ventriloquist;