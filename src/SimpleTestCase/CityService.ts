export class CityService{

cities=['bangalore','pune','kochi','chennai'];


getCities(){
   return this.cities;
}
addCities(city:string){
   this.cities.push(city);
}
}