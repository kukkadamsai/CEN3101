var mongoose = require('mongoose'), 
Listing = require('./ListingSchema.js'), 
config = require('./config');
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


var findLibraryWest = function() {
  Listing.find({ name: 'Library West' }, function(err, list) {

    if (err) throw err;

    console.log(list);
  });
  
};
var removeCable = function() {

  Listing.find({ code: 'CABL' }, function(err, list) {

    if (err) throw err;  
    
    console.log(list);

    Listing.findOneAndRemove({ code: 'CABL' }, function(err) {

    if (err) throw err;
  });
  });

};
var updatePhelpsMemorial = function() {

  Listing.findOneAndUpdate({ code: 'PHL' }, { address: '1953 Museum Rd, Gainesville, FL 32603' }, function(err, list) {

    if (err) throw err;

    console.log(list);
    // we have the updated user returned to us
  });
  
};
var retrieveAllListings = function() {
 
  Listing.find({}, function(err, listings) {
    
    if (err) throw err;
  
    console.log(JSON.stringify(listings, null, 1));
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();