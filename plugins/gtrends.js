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


var gtrends = function(){

    this.properties = {
        shortDescription: "Search Google trends.",
        fullHelp: "`/trends x - y -z ...` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var gtrendsmatch = Util.parseCommand(msg.text,["trends","trend"]);  
        
        if(gtrendsmatch)
        {
            
            var gtrendsoptions = {
//   screenSize: {
//     width: 320
//   , height: 480
//   }
 shotSize: {height: 'all'},
 shotOffset: {bottom: 500},  
 quality:80
                
            };
            
            
            var other_trends = gtrendsmatch[2].split(",");
        var trends_unescaped = gtrendsmatch[1] + "," + gtrendsmatch[2];
        var first_trend = encodeURIComponent(gtrendsmatch[1]);

        for (i in other_trends)
        {
            other_trends[i] = encodeURIComponent(other_trends[i]);
        }
        var trends = first_trend + "," + other_trends.join(",");
            
             
             
             
             webshot('http://www.google.com/trends/fetchComponent?hl=en-US&q=' + trends + '&cid=TIMESERIES_GRAPH_0&export=5&w=1024&h=900', 'gtrends.png',gtrendsoptions, function(err) {
  reply({ type: "status", status: "upload_photo" });
  reply({ type: "photo", photo: 'gtrends.png' });
  
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

module.exports = gtrends;