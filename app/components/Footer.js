import React from 'react';
import { Text, View,  Dimensions, StyleSheet} from 'react-native';



const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textName}>Hi there my name is Rami Talisveiber</Text>
        </View>
    )
}

let ws = Dimensions.get('window').width;
let hs = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        width: ws,
        height: hs * 0.07,
        backgroundColor: '#fff',
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    textName:{
        color: 'black'
    }
})

export default Footer;