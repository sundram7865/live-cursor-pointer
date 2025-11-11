import http from "http";
import { WebSocketServer } from "ws";
import url from "url";
import { v4 as uuidv4 } from "uuid";

const server = http.createServer((req, res) => {
    res.end("Hello World!");
});
const ws = new WebSocketServer({ server });

const connections ={}
const users={};

const broadcast = (message)=>{
    Object.keys(connections).forEach((uuid)=>{
       const connection = connections[uuid];
       const message= JSON.stringify(users)
       connection.send(message);
    })
}

const handleMessage= (bytes,uuid)=>{
   const message = JSON.parse(bytes.toString());
   const user=users[uuid];
   user.state= message

   broadcast()

   console.log(`${user.username} moved to ${user.state.x},${user.state.y}`);

}

const handleClose= ()=>{

    console.log(`${users[uuid].username} disconnected`);
    delete connections[uuid]
    delete users[uuid]

    broadcast()
 
}

ws.on("connection", (connection,request) => {
    const {username}=url.parse(request.url,true).query;
    const uuid = uuidv4();
    console.log(username); 
    console.log(uuid)

    connections[uuid]= connection

    users[uuid]={
        username:username,
        state:{
            x:0,
            y:0 
        }
    }

    connection.on("message",(message)=> handleMessage(message,uuid));
    connection.on("close", handleClose);
});

server.listen(8000,()=>{
    console.log("server started");
});