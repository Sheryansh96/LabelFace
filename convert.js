var convert = require('xml-js');
var fs = require('fs');
var sleep = require('system-sleep');
for(var i=1; i<=5;i++ ){
    fs.readFile('./xml tags/'+i.toString()+'.xml', function(err, data){
        if(err)
            throw err;
        var result1 = convert.xml2json( data.toString(), {compact: false, spaces: 4});
        console.log(result1);

        fs.writeFile('./json tags/'+i.toString()+'.json', result1,function(err,data){    
            if(err)
                throw err;
            
            console.log("saved");
        });
        sleep(2000);
    });
   sleep(2000);
}



