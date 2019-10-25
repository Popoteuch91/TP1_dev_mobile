import React from 'react';
import { Text, View, Button, FlatList, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import ItemWeather from '../components/ItemWeather';
import { ReduceFavorites } from '../reducers/favorites-reducer';

class FavoritesPage extends React.Component {

    static navigationOptions = (data) => {
        const { navigation } = data;
        return {
            title: 'Favoris',
            headerRight: (
                <Icon size={25} name={'ios-add'}
                    onPress={() => {
                        if (navigation.state.params.count < 16) {
                            navigation.push('AddFavorites');
                        }
                    }} />
            )
        }
    };

    state = { cities: [], refreshing: false };      

    onAddPress() {
        this.props.navigation.navigate('AddFavorites');
    }

    componentDidMount() {
    }

    refresh() {
        this.setState({ refreshing: true });
        ReduceFavorites(this.state, {type: 'favorites-refresh'}).then((resp) => {
            this.setState({ ...resp });
        });
    }

    deleteCity(cityName) {
        let tab = [...this.state.cities];
        tab.splice(tab.findIndex(e => e === cityName), 1);
        ReduceFavorites(this.state, {type: 'favorites-delete', tab: tab}).then((resp) => {
            this.setState({ ...resp });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavigationEvents onDidFocus={() => this.refresh()} />
                <FlatList data={this.state.cities}
                    refreshControl={<RefreshControl refreshing={this.state.refreshing}
                        onRefresh={() => this.refresh()} />}
                    renderItem={(element) => (
                        <ItemWeather key={element.item} city={element.item}
                            onDelete={(city) => this.deleteCity(city)} />
                    )} />
                <Button title="Ajouter" onPress={() => this.onAddPress()} />
            </View>
        );
    }
}

export default FavoritesPage