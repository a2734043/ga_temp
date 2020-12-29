const wol = require('wol');
 
wol.wake('10:78:d2:f2:47:d0', function(err, res){
  console.log(res);
});
