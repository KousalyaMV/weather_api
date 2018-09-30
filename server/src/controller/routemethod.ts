import {Request,Response}  from 'express'; 
import * as http from 'https';

export class WeatherController{
    public mainWeather(req:Request,res:Response){
      res.render('index');
    }
    public getOption(category:string,city:string):object{
        let apikey='b6907d289e10d714a6e88b30761fae22';
        let citypath=`/data/2.5/weather?q=${city}&appid=${apikey}`;
        let zippath=`/data/2.5/weather?q=${city}&appid=${apikey}`;
        let options = {
            host : 'openweathermap.org',
            path : (category=="1") ? citypath:zippath,
            method : 'GET'
        }  
        return options;
    }

    public getCityWeather(req:Request,res:Response){
        let category=req.body.Category;
        let city=req.body.searchValue;
        let options=new WeatherController().getOption(category,city);
        let data = '';
        http.get(options, (wtres)=>{
            wtres.on('data', (chunk) => {
                data += chunk;
            });
            wtres.on('end',() => {
                let temp=data!=undefined?'': JSON.parse(data).main.temp;
               res.render('partials/about',{city:city,citytemp:temp});
            });
        });   
    }
    
        
}