import React from 'react';
import {Text, View, Dimensions, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

let ws = Dimensions.get('window').width;
let hs = Dimensions.get('window').height;

// yes i know that its inline style usually i start with inline and then i create a styleSheet like in other files
const Header = ({ onChange}) => {
    return (
        <View style={{width: ws, height: hs * 0.07, justifyContent: 'center', alignItems: 'center', elevation: 2, flexDirection: 'row', backgroundColor:'white'}}>
            <View style={{flexDirection: 'row', height: hs * 0.05,  width: ws - 50, borderBottomWidth: 1, borderColor: 'grey',  alignItems: 'center'}}>
                <Icon name="search" size={20} color="grey" s/>
                <TextInput style={{ height: hs * 0.05,width: ws - 70}}
                           onChangeText={onChange}
                />
            </View>

        </View>
    )
}

export default Header;