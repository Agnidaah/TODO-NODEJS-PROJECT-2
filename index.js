const http=require('http');//http handles the request and response
const url=require('url');
var ejs = require('ejs');
let tasks=[];
http.createServer((req,res)=>{
    var pathname=url.parse(req.url).pathname;
    var params = url.parse(req.url,true).query;
    switch(pathname){
        case '/Todo':
            let con=``;
            if(params.task!="" && params.task!=undefined && tasks[tasks.length-1]!=params.task){tasks.push(params.task)}
            if(params.tass!=undefined){tasks = tasks.filter(function (task) {
                return task !== params.tass;
            });}
            res.writeHead(200, {'Content-Type': 'text/html'});
            ejs.renderFile(`public/todo.ejs`,{tas:tasks}, (err, str)=>{con=str});
            /*^here i was in need of rendering the ejs file and without express i needed to import ejs*/
            res.end(con);
        break;
        default:
            res.end('URL-https://gurpreets-todo-app.netlify.app/Todo');
        break;
    }
}).listen(4500);