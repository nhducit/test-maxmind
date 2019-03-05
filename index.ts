import * as maxmind from 'maxmind'

maxmind.open<maxmind.CityResponse>(
  './GeoLite2-City.mmdb',
  (err, cityLookup) => {
    let city = cityLookup.get('8.8.8.8') // inferred type maxmind.CityResponse
    console.log(city.country.geoname_id)
  }
)

// // sync version

// let cityLookup = maxmind.openSync<maxmind.CityResponse>('/path/to/GeoLite2-City.mmdb');
// let city = cityLookup.get('8.8.8.8'); // inferred type maxmind.CityResponse

// // use Reader class directly

// let cityLookup: maxmind.Reader<maxmind.CityResponse> = null;
// myLib.downloadFromCloudToStream(someCloudMaxmindDbUrl, (err, buffer) => {
//   if (!err) {
//     cityLookup = new maxmind.Reader(buffer);
//   }
// });

// if (cityLookup) {
//   let city = cityLookup.get('8.8.8.8'); // inferred type maxmind.CityResponse
// }
