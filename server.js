var express = require('express')
  , app 	= express() 
  , path   	= require('path');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join( __dirname + '/public' )));

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});