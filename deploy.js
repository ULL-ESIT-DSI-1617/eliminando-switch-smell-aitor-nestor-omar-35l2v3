var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'client'), function(err) {
    console.log(`Ejecutado`);
   });
