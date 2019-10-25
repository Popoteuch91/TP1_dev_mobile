import { AsyncStorage } from 'react-native';
const initialState = { cities: [], refreshing: false }

export async function ReduceFavorites (state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'favorites-refresh':
            nextState = {
                ...state,
                cities : await AsyncStorage.getItem('cities').then((data) => {
                    if(data == null)
                        return [];
                    else
                        return JSON.parse(data).sort();
                }),
                refreshing: false,
                favoriteCity: await AsyncStorage.getItem('favoriteCity').then((data) => {
                    if(data == null)
                        return 'Marseille';
                    else
                        return data;
                })
            };
            return nextState || state;
        case 'favorites-delete':
            nextState = {
                ...state,
                cities : await AsyncStorage.setItem('cities', JSON.stringify(action.tab)).then(() => {
                    return action.tab;
                }),
            };
            return nextState;
        case 'favorites-deleteAll':
            nextState = {
                ...state,
                cities : await AsyncStorage.removeItem('cities').then(() => {
                    return [];
                })
            };
            alert('Favoris supprimés');
            return nextState;
        case 'favorites-check':
            return await AsyncStorage.getItem('cities').then((data) => {
                let tab = [];
                if (data !== null) {
                    tab = JSON.parse(data);
                }
                tab.push(action.cityCheck);
                return AsyncStorage.setItem('cities', JSON.stringify(tab))
                    .then(() => {
                        return true;
                    });
            });
        case 'favorites-fav':
            nextState = {
                ...state,
                favoriteCity : await AsyncStorage.setItem('favoriteCity', action.city).then(() => {
                    return action.city;
                }),
            };
            return nextState;
        case 'favorites-unfav':
            nextState = {
                ...state,
                favoriteCity : await AsyncStorage.removeItem('favoriteCity').then(() => {
                    return 'Marseille';
                }),
            };
            return nextState;
        case 'favorites-getFav':
            nextState = {
                ...state,
                favoriteCity : await AsyncStorage.getItem('favoriteCity').then((resp) => {
                    return resp;
                }),
            };
            return nextState;
        default:
            return state
    }
}