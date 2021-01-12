import React, { Component, useEffect } from "react";
import { View, Text, Button } from 'react-native';
import { navigate, preventBack } from '../App'

class PinScreen extends Component {
    componentDidMount(){
        //preventBack()
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>PIN Screen</Text>
                <Button title="Go" onPress={() => navigate('Init')} />
            </View>
        );
    }
}

export default PinScreen