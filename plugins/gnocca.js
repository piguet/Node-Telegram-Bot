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
var webshot = require('webshot');
var gtravel = function(){

    this.properties = {
        shortDescription: "Get a random watfrom the `GT` file.",
        fullHelp: "`wat` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var gnmatch = Util.parseCommand(msg.text,["/gnocca","gnoccatravels","gnoccatravel","Gnoccatravel","Gnoccatravels","/gt","/GT"], {noRequireTrigger: true });  
        
        if(gnmatch)
        {
            var gchoice = Math.floor(Math.random() * 28197);
            var gnoptions = {
//   screenSize: {
//     width: 320
//   , height: 480
//   }
 shotSize: {height: '900'},
 shotOffset: {top: 170},  
 quality:80
                
            };
            
             reply({ type: "status", status: "upload_photo" });
             
             //http://googleweblight.com/?lite_url=http://www.gnoccatravels.com/discussion/02343&f=1&s=1&source=wax-wax
             webshot('http://googleweblight.com/?lite_url=http%3A%2F%2Fwww.gnoccatravels.com%2Fdiscussion%2F'+gchoice+'&noimg=1&btnGo=Vai&source=wax&ie=UTF-8&oe=UTF-8', 'gnocca.png',gnoptions, function(err) {
  reply({ type: "status", status: "upload_photo" });
  reply({ type: "photo", photo: 'gnocca.png' });
  
});
             
             
             
             
             
        }
    });
    
    
    
    
    // this.on("inline_query", function (query, reply){
    //     var gnargs = Util.parseInline(query.query,["gt","gnocca"], {joinParams:true});
    //     if(gnargs)
    //     {   
    //         if(gnargs[0]){
                
      
             
    //     var gnanswers = [];
        
    //     for(var i=0; i<5; i++)
    //     {
    //         var gchoice = Math.floor(Math.random() * 28197);
    //         var gnurl = "http://www.gnoccatravels.com/discussion/" + gchoice ;
    //         var gnnr = i;
    //         // http://ftr.fivefilters.org/makefulltextfeed.php?url=http%3A%2F%2Fwww.gnoccatravels.com%2Fdiscussion%2F13056&max=3
    //         gnanswers.push({id:""+i, type:'article', thumb_url:'http://www.gnoccatravels.com/themes/gt/design/img/logo_small.png', title:'Gnoccatravels', message_text: gnurl, description: "Random"});
            
    //     }
    //     reply(gnanswers);   
           
          
    //     }
    // }
    
    
    // });

};

module.exports = gtravel;