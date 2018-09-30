import {WeatherController} from  '../controller/routemethod'
//import * as path from "path";

export class Routes{
    public controller:WeatherController=new WeatherController();
    public routes(app:any): void { 
        app.route('/')
        .get(this.controller.mainWeather);
        app.route('/weatherapi')
        .post(this.controller.getCityWeather)
          
    }
}