var fs=require('fs')
var http=require('http')
var sql=require('mysql2')
http.createServer( (req,res)=>
{

 function data()
 {
{
var data=sql.createConnection({
  database:'data2',
  host:'localhost',
  user:'root',
  password:'srinadh$17@29'
})
data.query("select * from Student",(err,cols,info)=>
{
  var ff=JSON.stringify(cols)
  fs.writeFile('serverInfo.txt',ff,(err)=>
  {
  })
  res.end();
})
}
}
data()
}

).listen(9090);

