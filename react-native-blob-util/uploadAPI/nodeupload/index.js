const express = require('express');

const server = express();
const fs = require('fs');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
//配置静态资源文件
server.use(express.static(__dirname +"/public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(multer({ dest: '/tmp/'}).array('file'));

server.get('/',(req,res)=>{
    res.sendFile( __dirname + "/" + "index.html" );
})

server.listen(3006,err=>{
    err ? console.log(err): console.log('server http:127.0.0.1:3006');
})

server.post('/fileUpload',(req,serverRes)=>{
    console.log(req.files,"file");
    console.log(req.files,"files");
    console.log(req.body,"body");
    const fileUrl = __dirname + "/public/" + req.files[0].originalname; //文件名
    fs.readFile(req.files[0].path,(err,res)=>{
        fs.writeFile(fileUrl, res,(err=> { //文件写入
            if( err ){
                console.log( err );
            }else{
                // 文件上传成功，respones给客户端
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log('/public/'+response.filename);
            serverRes.send({
                status: 200,
                msg: "上传成功",
            });
        }))

    })
})
const filePath = path.join(__dirname,"/public/fetch.txt")


server.get("/download",(req,serverRes)=> {
    serverRes.download(filePath)
    
})

