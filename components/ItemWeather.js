import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReduceWeather } from '../reducers/weather-reducer';
import { ReduceFavorites } from '../reducers/favorites-reducer';
import { ImgWeather } from '../pages/HomePage';
import { ActivityIndicator } from 'react-native-paper';
import { Text, View, Button, StyleSheet } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { NavigationEvents } from 'react-navigation';

class ItemWeather extends Component {
    static propTypes = {
        city: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    state = {
        weather: null,
        favoriteCity: 'Marseille'
    }

    componentDidMount() {
        ReduceWeather(this.state, {type: 'weather-service', city: this.props.city}).then((resp) => {
            this.setState({ ...resp });
        });
    }

    favoriteCity(city) {
        ReduceFavorites(this.state, {type: 'favorites-fav', city: city}).then((resp) => {
            this.setState({ ...resp });
        });
    }

    unfavoriteCity(city) {
        ReduceFavorites(this.state, {type: 'favorites-unfav', city: city}).then((resp) => {
            this.setState({ ...resp });
        });
    }

    render() {
        return (
            <SwipeRow leftOpenValue={0} rightOpenValue={-75} key={this.props.city}>
                <View style={styles.standaloneRowBack}>
                    <Text>Left</Text>
                    <Button title="Suppr." onPress={() => this.props.onDelete(this.props.city)} />
                </View>
                <View style={styles.standaloneRowFront}>
                    <View key={this.props.city} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{this.props.city} </Text>
                        {this.state.weather !== null ? (
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text>{this.state.weather.main.temp}°C</Text>
                                <ImgWeather icon={this.state.weather.weather[0].icon} />
                                {
                                    this.props.city == this.state.favoriteCity ? (
                                        <Button title="Unfav" onPress={() => this.unfavoriteCity(this.props.city)} />
                                    ) : (<Button title="Fav" onPress={() => this.favoriteCity(this.props.city)} />)
                                }
                            </View>
                        ) : (<ActivityIndicator />)}
                    </View>
                </View >
            </SwipeRow>
        );
    }
}
const styles = StyleSheet.create({
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 80,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    backTextWhite: {
        color: '#FFF',
    }
});
export default ItemWeather;
