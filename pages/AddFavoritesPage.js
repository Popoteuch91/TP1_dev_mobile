import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ReduceWeather } from '../reducers/weather-reducer';
import { ReduceFavorites } from '../reducers/favorites-reducer';


class AddFavoritesPage extends React.Component {

    static navigationOptions = {
        title: 'Ajouter une ville'
    };

    state = {
        cityName: ''
    };

    changeText(value) {
        this.setState({ cityName: value });
    }

    onPressAdd() {
        ReduceWeather(this.state, {type: 'weather-service', city: this.state.cityName}).then((resp) => {
            ReduceFavorites(this.state, {type: 'favorites-check', cityCheck: this.state.cityName})
                .then((resp) => {
                    this.props.navigation.goBack();
                });
        }).catch(err => {
            alert(`Pas de données pour la ville ${this.state.cityName}`);
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput onChangeText={(text) => this.changeText(text)} />
                <Button title="Ajouter" onPress={() => this.onPressAdd()} />

            </View>
        );
    }
}

export default AddFavoritesPage;