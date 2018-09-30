import * as http from  'http';
import * as express from "express";
import {Routes} from './routes/routes'
import * as bodyParser from 'body-parser'
import * as  path from 'path'

export class weatherapi{
    public static readonly PORT:number=8080;
    private expressApp:express.Application;
    private server:http.Server;
    private port:string | number;
    public routePrv: Routes = new Routes();

    constructor(){
       this.createApp();
       this.config();
       this.createServer();
       this.listen();
       this.routePrv.routes(this.expressApp);
    }

    private createApp():void{
        this.expressApp=express();
    }
    private createServer():void{
        this.server=http.createServer(this.expressApp);
    } 
    private config():void{
        this.port=process.env.port|| weatherapi.PORT;
        this.expressApp.set('view engine', 'ejs');
        this.expressApp.set('views', path.join(__dirname,'../../client/views'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
       // serving static files
      this.expressApp.use(express.static(path.join(__dirname, '../../client')));
    }  
    private listen():void{
        this.server.listen(this.port,()=>{
            console.log("Running Live Weather on port %s",this.port);   
        })
    }
    public getApp():express.Application{
        return this.expressApp;
    }
}