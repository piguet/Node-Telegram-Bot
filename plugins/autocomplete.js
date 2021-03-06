/*
    DESCRIPTION: 
        Get a random line from the califfos file

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
var suggestCallBack;

var autocomplete = function(){

    this.properties = {
        shortDescription: "Get an autocomplete list from google",
        fullHelp: "`auto is all you need to have fun.",
        inline:true
    };
    
   
    //       califfo = [];

    // this.on("init", function (done){
    //     var self = this;

    //     fs.readFile("./files/califfo",'utf8', function(err, data) {
    //         if(err) {
    //             return done(err, null);
    //         }
    //         calquotes = data.toString().split("\n");
    //         console.log("\tcaliffo: file loaded");
    //         return done(null, self);
    //     }); 
    // });

    

    
    // this.on("text", function (msg, reply){
    //     var match = Util.parseCommand(msg.text,["califfo","Califfo","califano","Califano"], {noRequireTrigger: true });  
        
    //     if(match)
    //     {
    //         choice = Math.floor(Math.random() * calquotes.length);

    //         reply({type: 'text', text: "_\"" + calquotes[choice] + "\"_ \n\n F.C.", options:{parse_mode: "Markdown"}});
    //     }
    // });
    
this.on("inline_query", function (query, reply){
        var autoargs = Util.parseInline(query.query,["auto","!auto"], {joinParams:true});
        var autotext = autoargs[1];
        
        if(calargs)
        { 
            function suggest(query) {
            $.getJSON("http://suggestqueries.google.com/complete/search?callback=?",
                {
                  "hl":"en", // Language
                  "jsonp":"suggestCallBack", // jsonp callback function name
                  "q":query, // query term
                  "client":"firefox" // force youtube style response, i.e. jsonp
                }
            );
            
            
            suggestCallBack = function (data) {
                var suggestions = [];
                $.each(data[1], function(key, val) {
                    suggestions.push({"value":val});
                });
            
            
            
            
            
            
            if(calargs[0]){
                
      
             
        var answers = [];
        
        for(var i=0; i<calquotes.length; i++)
        {
            answers.push({id:""+i, type:'article', thumb_url:'http://blog.wikitesti.com/wp-content/uploads/2010/09/califano1.jpeg', title:'Tinto', message_text:'_'+calquotes[i]+'_ \n\n califfo Brass',description:calquotes[i],parse_mode:'Markdown'});
            
        }
        reply(answers);   
           
          
        }
    }
    
            };
            
        };
    });



}
module.exports = autocomplete;