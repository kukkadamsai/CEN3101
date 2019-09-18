'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

    var X;
    var Y;

    mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true });

    fs.readFile('listings.json', 'utf8', function(err, data) {
      if(err) throw err;
      X = JSON.parse(data);
    
      X.entries.forEach(function(X){
      Y = new Listing(X);
      Y.save(function(err) {if(err) throw err;});
      //docList.save(function(err)if(err) throw err)
      });
    
    });

