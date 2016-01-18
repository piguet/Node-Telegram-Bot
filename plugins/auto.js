var request = require('request');
var Util = require('./../src/Util');
var suggest = require('suggestion');
var auto = function() {
    
    

    this.properties = {
        inline: true,
        shortDescription: "Get boobs and butts.\n\n*Warning: Adult Content*",
        fullHelp: "Just type `/boobs [howMany]` or `/butts [howMany]`. `[howMany]` is optional and it will cap to " 
    };

    // this.on("text", function (msg, reply){
    //     // var matchBoobs = Util.parseCommand(msg.text,["boobs"], {noRequireTrigger: true }); 
    //     // var matchButts = Util.parseCommand(msg.text,["butts"], {noRequireTrigger: true }); 
    //     var autoargs = Util.parseInline(query.query,["auto","!auto"], { joinParams: true });
        
    //     if (autoargs) {
            
           
            
    //         this.getRandom(match[0], function(data){
                
    //             for(var i=0; i<howMany; i++)
    //             {
    //                 Util.downloadAndSaveTempResource(data[i].url, "png", function(fn){
    //                     reply({ type: "photo", photo: fn });
    //                 });
    //             }
    //         });
    //     }
    // });


    this.on("inline_query", function(query, reply) {
        // var matchBoobs = Util.parseInline(query.query,["boobs"]); 
        // var matchButts = Util.parseInline(query.query,["butts"]); 
        var autoargs = Util.parseInline(query.query,["auto","!auto"], { joinParams: true });
        
        if (autoargs) {
            
            var aq = autoargs[1];
            suggest(aq, { hl: 'it' }, function (err, suggestions) {
  if (err) throw err;
  console.log(suggestions);
  
   var autoansw = [];
        
        for(var i=0; i<suggestions.length; i++)
        {   ricnr = i + 1 ;
            autoansw.push({id:""+i, type:'article', thumb_url:'http://3dprint.com/wp-content/uploads/2015/01/gt2.png', title:'Suggerimenti da Google', message_text:'*'+suggestions[i]+'* \n\n*Ricerca #'+ricnr+'* su Google partendo da *"'+aq+'"* ',description:suggestions[i],parse_mode:'Markdown'});
            
        }
        reply(autoansw);   
  
  
  

})
            
            
            
            
            
            
        }
    });


  
}

module.exports = auto;
