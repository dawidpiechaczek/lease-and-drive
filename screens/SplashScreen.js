import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { LOGO } from '../image/images';

class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Image style={styles.image} source={LOGO} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    image: {
        flex: 0.3,
        aspectRatio: 1.5,
        resizeMode: 'contain'
    }
});

export default SplashScreen