import {http} from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, ()=> console.log("Server is running on port 3333"));

/*
GET = buscas
POST = criacao
PUT = alteracao
DELETE = deletar
PATCH = alterar uma informação especifica 
*/