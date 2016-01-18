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
        fullHelp: "`/tinto` is all you need to have fun.",
        inline:true
    };
    
          tinto = [];

    this.on("init", function (done){
        var self = this;

        fs.readFile("./files/tinto",'utf8', function(err, data) {
            if(err) {
                return done(err, null);
            }
            tquotes = data.toString().split("\n");
            console.log("\ttinto: file loaded");
            return done(null, self);
        }); 
    });

    

    
    this.on("text", function (msg, reply){
        var match = Util.parseCommand(msg.text,["tinto","Tinto","TINTO"], {noRequireTrigger: true });  
        
        if(match)
        {
            choice = Math.floor(Math.random() * tquotes.length);

            reply({type: 'text', text: "_\"" + tquotes[choice] + "\"_ \n\n T.B.", options:{parse_mode: "Markdown"}});
        }
    });
    
this.on("inline_query", function (query, reply){
        var args = Util.parseInline(query.query,["tinto","!tinto"], {joinParams:true});
        if(args)
        {   
            if(args[0]){
                
      
             
        var answers = [];
        
        for(var i=0; i<tquotes.length; i++)
        {
            answers.push({id:""+i, type:'article', thumb_url:'http://www.online-news.it/wp-content/uploads/2011/07/Tinto-Brass.jpg', title:'Tinto', message_text:'_'+tquotes[i]+'_ \n\n Tinto Brass',description:tquotes[i],parse_mode:'Markdown'});
            
        }
        reply(answers);   
           
          
        }
    }
    
    
    });

};

module.exports = tinto;