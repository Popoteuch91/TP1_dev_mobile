import React from 'react';
import { Text, View, Button } from 'react-native';
import { ReduceFavorites } from '../reducers/favorites-reducer';

class SettingsPage extends React.Component {

    onDeleteFavoritesPress() {
        ReduceFavorites(this.state, {type: 'favorites-deleteAll'}).then((resp) => {
            this.setState({ ...resp });
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="Supprimer les favoris" onPress={() => this.onDeleteFavoritesPress()} />
            </View>
        );
    }
}

export default SettingsPage;