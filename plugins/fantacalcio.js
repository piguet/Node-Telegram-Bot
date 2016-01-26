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
var fantacalcio = function(){

    this.properties = {
        shortDescription: "Get a random watfrom the `GT` file.",
        fullHelp: "`wat` is all you need to have fun."
    };

    

    

    
    this.on("text", function (msg, reply){
        var fmatch = Util.parseCommand(msg.text,["/legasiokki@piguetbot","/royalfools@piguetbot","/legasiokki","/royalfools"], {noRequireTrigger: true });  
        
        if(fmatch)
        {
           
            var foptions = {
//   screenSize: {
//     width: 320
//   , height: 480
//   }
 shotSize: {height: '800',width:'696'},
 
  cookies: [
    {
      name:     'FantaServiceAuth',
      value:    '3B188BCCF1426861A97D6671A945088AF3125675013530C4571AB6AF6813DC5CB6B07F076630EA3ADC9BF6B74BE28308894C2B4E2218B3B2C85CEC2BBD1D08A2DA1E39EE7657934C53695A274590B176320A4047906F32D023A05F0A7F04ED54DCFBDA6333E29FEFB69CEC269BA6203D37816F95',
      domain:   'www.fantacalcioservice.it',
      path:     '/'
    },
    {
        name:     'ASPSESSIONIDAQRQBQTS',
      value:    'BGGCMHCCEEKFCAADADHLFJIE',
      domain:   'www.fantacalcioservice.it',
      path:     '/'
        
    },
    {
        name:     'FSVARRAffinity',
      value:    '7594e064800eaf2461bf812f89147ac31a902d8a22ba6d58b9390d79e30b4cdc',
      domain:   'www.fantacalcioservice.it',
      path:     '/'
        
    },
    {
        name:     'ASP.NET_SessionId',
      value:    'o0y40w5xeh1j3nsk45krmizl',
      domain:   'www.fantacalcioservice.it',
      path:     '/'
        
    }
    
  ],
 shotOffset: {top: 735, left:10, bottom:100},  
//  quality:80
                
            };
            
             reply({ type: "status", status: "upload_photo" });
             if(fmatch == "/legasiokki@piguetbot" || fmatch ==  "/legasiokki")
             var fcurl = "http://www.fantacalcioservice.it/it/lega/privata/68853/homelega/lega-siokki-calcio/";
             if(fmatch == "/royalfools@piguetbot" || fmatch ==  "/royalfools")
             var fcurl = "http://www.fantacalcioservice.it/it/lega/privata/68852/homelega/royal-fools-league/";
             
             webshot(fcurl, 'fc.png',foptions, function(err) {
  reply({ type: "status", status: "upload_photo" });
  reply({ type: "photo", photo: 'fc.png' });
  
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

module.exports = fantacalcio;