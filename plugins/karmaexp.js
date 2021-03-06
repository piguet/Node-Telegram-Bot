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
        var reKarma = /(\-\-|\+\+|—)/ig; 

        var matchKarma = reKarma.exec(msg.text);  
        
        var matchChart = Util.parseCommand(msg.text,["karmachart"]);  
        if(matchKarma){
            uname = msg.message_id;
            operator = matchKarma[1];
            var umsg = (msg.message_id-1);
            chat = msg.chat.id;

            if(uname == 0)
            {
                reply({type: 'text', text: "Hey! You can't karma yourself!"});
                return;
            }
            
            if(operator == "--" || operator == "—")
            {
                this.db.decr(chat + ":" + uname, function(err, now){
                    reply({type: 'text', text: "@" + uname + " now has " + now + " Karma", options: { reply_to_message_id: umsg }});
                });
            }
            else
            {    
                
                this.db.incr(chat + ":" + uname, function(err, now){
                     msgminus = Math.floor(Math.random() * 50);
                     msgchoice= (uname-msgminus);
                    reply({type: 'text', text: uname + " now has " + now + " Karma", options: { reply_to_message_id: uname }});
                });
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
                    reply({type: 'text', text: "No Karma was given in this chat."});
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
                                
                                message = "👑 Karma Ranking 👑\n";
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