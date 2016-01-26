var fs = require('fs');
var webshot = require('webshot');
var easyimg = require('easyimage');
var Util = require('./../src/Util');




var gtrends = function(){

    this.properties = {
        shortDescription: "Search Google trends.",
        fullHelp: "`/trends x - y -z ...` is all you need to have fun."
    };


var trend = {};

trend.parseTextMsg = function(message)
{
    var regexp = new RegExp("^\/trend(?:@"+trend._globals.me.username+"|) (.*?),(.*)$");
    var matches = message.text.match(regexp);
    if (matches)
    {
        //command okay
        var other_trends = matches[2].split(",");
        var trends_unescaped = matches[1] + "," + matches[2];
        var first_trend = encodeURIComponent(matches[1]);

        for (i in other_trends)
        {
            other_trends[i] = encodeURIComponent(other_trends[i]);
        }
        var trends = first_trend + "," + other_trends.join(",");

        webshot('http://www.google.com/trends/fetchComponent?hl=en-US&q=' + trends + '&cid=TIMESERIES_GRAPH_0&export=5&w=1024&h=900', 'googletrend.png', function(err)
        {
            if (err)
            {
               reply({type: 'text', text: "ERROR", options:{parse_mode: "Markdown"}});
            }
            else
            {
                easyimg.crop(
                {
                    src: "googletrend.png",
                    dst: "googletrend.png",
                    x: 0,
                    y: 0,
                    gravity: "North",
                    cropwidth: 1024,
                    cropheight: 400
                })
                    .then(function()
                    {
                        var photo = {
                            value: fs.createReadStream('googletrend.png'),
                            options:
                            {
                                filename: 'googletrend.jpg',
                                contentType: 'image/jpg'
                            }
                        }
                        methods.sendPhoto(message.chat.id, photo, "Trend of " + trends_unescaped, message.message_id);
                    });
            }
        });

    }
}