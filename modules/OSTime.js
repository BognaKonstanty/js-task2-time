var os = require('os');

process.stdin.setEncoding('utf-8');


/*process.stdin.on('readable', function() {
    var input = process.stdin.read(); 



   if(input !== null) {
        var seconds = input.trim();
        console.log(seconds);
        console.log(convertOStime(seconds));
    }
});*/

function convertOSTime(seconds) {
            /*var hours;
            var minutes;
            var seconds;
          if (seconds < 3600) {
               hours= Math.floor(seconds/3600);
              minutes = Math.floor(seconds/60);
              seconds = seconds%60;
            return hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
        }
           else {
              hours= Math.floor(seconds/3600);
              minutes = Math.floor(seconds/60)%60;
              seconds = seconds%60;
            return hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
          }*/

            var hours   = Math.floor(seconds / 3600);
            var minutes = Math.floor((seconds - (hours * 3600)) / 60);
            var seconds = seconds - (hours * 3600) - (minutes * 60);
            
            return hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
        
        //console.log(convertOStime(125));
}
//}
exports.print = convertOSTime;
//exports.getCPUDetails = getCPUDetails;
//exports.print = test;
