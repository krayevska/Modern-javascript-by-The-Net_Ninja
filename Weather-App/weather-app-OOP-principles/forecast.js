class Forecast{
  constructor(){
    this.key = 'IRFmAFAtzT1nMHNpOGweQaPtOVAe5Nho';
    this.WeatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }

  //'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=IRFmAFAtzT1nMHNpOGweQaPtOVAe5Nho&q=london'

  async updateCity(city){
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
    } 
  
  async getWeather(id){
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.WeatherURI + query);
    const data = await response.json();
    return data[0];
  };

  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  };

}
