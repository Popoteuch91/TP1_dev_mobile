import React from 'react';
import { View } from 'react-native';
import HomePage from "../pages/HomePage";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SettingsPage from "../pages/SettingsPage";
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesPage from '../pages/FavoritesPage';
import { createStackNavigator } from 'react-navigation-stack';
import AddFavoritesPage from '../pages/AddFavoritesPage';

const favoritesNavigator = createStackNavigator(
    {
        Favorites: {
            screen: FavoritesPage
        },
        AddFavorites: {
            screen: AddFavoritesPage
        }
    },
    {
        initialRouteName: 'Favorites',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: 'Accueil',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-home'} />
                )
            }
        },
        Favorites: {
            screen: favoritesNavigator,
            navigationOptions: {
                tabBarLabel: 'Favoris',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-star'} />
                )
            }
        },
        Settings: {
            screen: SettingsPage,
            navigationOptions: {
                tabBarLabel: 'Paramètres',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-settings'} />
                ),
                barStyle: { backgroundColor: 'red' }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default tabNavigator;