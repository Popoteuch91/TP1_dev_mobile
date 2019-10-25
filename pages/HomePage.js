import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Loading from '../components/Loading';
import { ReduceWeather } from '../reducers/weather-reducer';
import { NavigationEvents } from 'react-navigation';
import { ReduceFavorites } from '../reducers/favorites-reducer';

class HomePage extends React.Component {
    
    state = {
        weather: null,
    };

    componentDidMount() {
        ReduceWeather(this.state, {type: 'weather-service', city: 'Marseille'}).then((resp) => {
            this.setState({ ...resp });
        });
    }
    
    refresh() {
        this.setState({ refreshing: true });
        ReduceFavorites(this.state, {type: 'favorites-getFav'}).then((resp) => {
            this.setState({ ...resp });
        });
        ReduceWeather(this.state, {type: 'weather-service', city: this.state.favoriteCity}).then((resp) => {
            this.setState({ ...resp });
        });
    }

    render() {
        return (
            <LinearGradient colors={['#0000ff', '#ffffff']} style={{ flex: 1 }}>
                {this.state.weather != null ? (
                    <View style={{ flex: 1 }} onRefresh={() => this.refresh()}>
                        <NavigationEvents onDidFocus={() => this.refresh()} />
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{this.state.weather.name}</Text>
                            <Text>Vendredi 11 octobre 2019</Text>
                        </View>
                        <View style={[styles[this.state.weather.weather.main], { flex: 2, justifyContent: 'center', alignItems: 'center' }]}>
                            <ImgWeather icon={this.state.weather.weather[0].icon} />
                            <Text>{this.state.weather.main.temp}°c</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Sunrise time={this.state.weather.sys.sunrise} />
                            <Sunset time={this.state.weather.sys.sunset} />
                        </View>

                    </View>

                ) : (
                        <Loading displayColor='orange'>
                            <Text>connexion au serveur...</Text>
                        </Loading>
                    )}
            </LinearGradient>
        );
    }
}

export const ImgWeather = (props) => {
    return (
        <Image style={{ width: 80, height: 80 }} source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }} />
    );
}

const Sunrise = (props) => {
    const dt = new Date(props.time * 1000);
    return (
        < Text > {`${dt.getHours()}:${dt.getMinutes()}`}</Text>
    );
}

const Sunset = (props) => {
    const dt = new Date(props.time * 1000);
    return (
        < Text > {`${dt.getHours()}:${dt.getMinutes()}`}</Text>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    Clear: {
        color: 'blue'
    },
    Sunny: {
        color: 'yellow'
    }
});