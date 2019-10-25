import axios from 'axios';
const initialState = { weather: {}}

export async function ReduceWeather (state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'weather-service':
            // Renvoi des data weather d'une ville
            const key = '3d13d25c0c34fa3c3db183ad6b8cdff4';
            const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;
            nextState = {
                ...state,
                weather : await axios.get(`${url}&q=${action.city}`).then((resp) => {
                    return resp.data;
                })
            };
            return nextState;
        default:
            return state
    }
}