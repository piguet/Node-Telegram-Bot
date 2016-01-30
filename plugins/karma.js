/*
    DESCRIPTION: 
        Give karma points to other users.

    AUTHOR: 
        Cristian Baldi

    COMMANDS:
        @username++ //add 1 karma point
        @username-- //remove 1 karma point
        /karmachart //print the karma chart
    EXAMPLE:
        You: @user++
        Bot: @user now has N karma

        
*/
var Util = require('./../src/Util');

var karma = function(){

    this.properties = {
        shortDescription: "Give Karma Points to your friends!",
        fullHelp: "`@username++` will give to `@username` a Karma Point\n`@username--` will remove from `@username` a Karma Point",
        databaseAccess: true
    };

    this.on("text", function (msg, reply){
       var reKarma = /(\-\-|\+\+|—|👍🏻|👍|👍🏼|👎|👎🏻|👎🏿)/ig;  

        var matchKarma = reKarma.exec(msg.text);  
        
        var matchChart = Util.parseCommand(msg.text,["medaglie"]);  
        if(matchKarma){
            uname = msg.reply_to_message.from.username;
            operator = matchKarma[0];
            chat = msg.chat.id;

            if(uname.toLowerCase() == msg.from.username.toLowerCase())
            {
                reply({type: 'text', text: "Hey! Non puoi automedagliarti!"});
                return;
            }
            
            if(operator == "--" || operator == "—")
            {
                this.db.decr(chat + ":" + uname, function(err, now){
                    reply({type: 'text', text: "@" + uname + " ora ha " + now + " medaglie"});
                });
            }
            else
            {
                this.db.incr(chat + ":" + uname, function(err, now){
                    reply({type: 'text', text: "@" + uname + " ora ha " + now + " medaglie"});
                })
            }

        }
        else if(matchChart){
            var self = this;
            chat = msg.chat.id;

            self.db.keys(chat + ":*", function(err, keys){
                var originalKeys = keys.slice();
                var ranking=[];

                if(originalKeys.length == 0)
                {
                    reply({type: 'text', text: "Nessuna medaglia in questa chat."});
                    return;
                }
                for (var i = 0; i < originalKeys.length; i++) {

                    (function(k) {
                        self.db.get(k, function(err, v){
                            ranking.push({key: k.replace(chat + ":",""), value: v});

                            keys.splice(0, 1); // classic hack for async for
                            if (keys.length == 0) {
                                ranking.sort(function(a,b) {
                                    return b.value - a.value;
                                });
                                
                                message = "🎖 Classifica Medaglie 🎖\n";
                                for (var j = 0; j < ranking.length; j++) {
                                    message+= "\n" + (j+1) +") " + ranking[j].key + " (" + ranking[j].value +")";
                                }
                                reply({type: 'text', text: message});

                            }
                        });
                    })(originalKeys[i]);
                    
                };
            });
        }
    });

};

module.exports = karma;