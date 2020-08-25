const apiKey = 'R38hBD8omwfEVu6S8eYrHD9hcngZGQOG';


// Get Weather information from City
const getWeather = async (cityKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${apiKey}`;

    const response = await fetch(base + query);
    // turn response into data
    const data = await response.json();
    return data[0];
}

// Get City information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    // turn response into data
    const data = await response.json();

    return data[0];
};


// getWeather('329260')


//   getCity('manchester')
//   .then( data => {
//       return getWeather(data.Key);
//   }).then( data =>{
//     console.log(data);  
//   })
//   .catch(error => console.log(error));






