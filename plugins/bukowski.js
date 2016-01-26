/*
    DESCRIPTION: 
        Get a random line from the bukowskis file

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

var bukowski = function(){

    this.properties = {
        shortDescription: "Get a random bukowski from the `bukowskis` file.",
        fullHelp: "`/bukowski` is all you need to have fun.",
        // inline:true
    };
    
          bukowski = [];

    this.on("init", function (done){
        var self = this;

        fs.readFile("./files/bukowski",'utf8', function(err, data) {
            if(err) {
                return done(err, null);
            }
            bukowskiquotes = data.toString().split("\n");
            console.log("\tbukowski: file loaded");
            return done(null, self);
        }); 
    });

    

    
    this.on("text", function (msg, reply){
        var bukowskimatch = Util.parseCommand(msg.text,["bukowski","Bukowski"], {noRequireTrigger: true });  
        
        if(bukowskimatch)
        {
            bukowskichoice = Math.floor(Math.random() * bukowskiquotes.length);

            reply({type: 'text', text: "_\"" + bukowskiquotes[bukowskichoice] + "\"_ \n\n C.B.", options:{parse_mode: "Markdown"}});
        }
    });
    
this.on("inline_query", function (query, reply){
        var bukowskiargs = Util.parseInline(query.query,["bukowski","!bukowski","Bukowski"], {joinParams:true});
        if(bukowskiargs)
        {   
            
                
      
             
        var bukowskianswers = [];
        
        for(var i=0; i<bukowskiquotes.length; i++)
        {
            
            
            var bukowskishort = bukowskiquotes[i].substring(0, 100);
            bukowskianswers.push({id:""+i, type:'article', thumb_url:'http://biografieonline.it/img/bio/Charles_Bukowski_1.jpg', title:'Bukowski', message_text:'_'+bukowskiquotes[i]+'_ \n\n C.B.',description: bukowskishort,parse_mode:'Markdown'});
            
        }
        reply(bukowskianswers);   
           
          
        
    }
    
    
    });

};

module.exports = bukowski;