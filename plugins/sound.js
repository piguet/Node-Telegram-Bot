/*
    DESCRIPTION: 
        Get a random line from the sounds file

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

var sound = function(){

    this.properties = {
        shortDescription: "Get a random sound from the `sounds` file.",
        fullHelp: "`/sound` is all you need to have fun.",
        inline:true
    };
    
    //       sound = [];

    // this.on("init", function (done){
    //     var self = this;

    //     fs.readFile("./files/sound",'utf8', function(err, data) {
    //         if(err) {
    //             return done(err, null);
    //         }
    //         soundquotes = data.toString().split("\n");
    //         console.log("\tsound: file loaded");
    //         return done(null, self);
    //     }); 
    // });

    

    
    this.on("text", function (msg, reply){
        var soundmatch = Util.parseCommand(msg.text,["sound","!sound","Sound"],{joinParams: true, noRequireTrigger : true});  
         var soundtofind = soundmatch[1];
        if(soundmatch)
        {
               
                
                
                if (soundtofind == 'modem'){
               var soundurl = "https://upload.wikimedia.org/wikipedia/commons/3/33/Dial_up_modem_noises.ogg";
            Util.downloadAndSaveTempResource(soundurl, "ogg", function(fn){
                        reply({type: 'voice', voice: fn});
                    });
                    
                    
                if(soundtofind == 'siren')
        {
            
               var soundurl = "http://vignette2.wikia.nocookie.net/deadfrontier/images/9/97/Siren.ogg/revision/latest?cb=20100410183701";
            Util.downloadAndSaveTempResource(soundurl, "ogg", function(fn){
                        reply({type: 'voice', voice: fn});
                    });
        }       
        
                if(soundtofind == 'striscia')
        {
            
               var soundurl = "http://www.mcello63.com/suonerie_varie/39%20-%20CLACSON%20AUTO.mp3";
            Util.downloadAndSaveTempResource(soundurl, "ogg", function(fn){
                        reply({type: 'voice', voice: fn});
                    });
        }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
        }}
        
        
         
    });
    
// this.on("inline_query", function (query, reply){
//         var soundargs = Util.parseInline(query.query,["sound","!sound","sound"], {joinParams:true});
//         if(soundargs)
//         {   
            
                
      
             
//         var soundanswers = [];
        
//         for(var i=0; i<soundquotes.length; i++)
//         {
            
            
//             var soundshort = soundquotes[i].substring(0, 100);
//             soundanswers.push({id:""+i, type:'article', thumb_url:'http://biografieonline.it/img/bio/Charles_sound_1.jpg', title:'sound', message_text:'_'+soundquotes[i]+'_ \n\n C.B.',description: soundshort,parse_mode:'Markdown'});
            
//         }
//         reply(soundanswers);   
           
          
        
//     }
    
    
//     });

};

module.exports = sound;