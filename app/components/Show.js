import React from "react";
import {FlatList, ImageBackground, Text, View,Dimensions, TouchableHighlight, StyleSheet} from "react-native";
import Star from 'react-native-star-view';
import IconEntypo from 'react-native-vector-icons/Entypo';






const Show = ({item: {show}, navigate}) =>{

    return(
        <TouchableHighlight onPress={navigate} style={styles.mainContainer}>
            <ImageBackground
                style={styles.img}
                imageStyle={styles.containerRadius}
                source={{uri: show.image? show.image.medium: 'none'}}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.row01}>
                        <Text style={styles.nameText}>{show.name}</Text>
                        <IconEntypo name="dots-three-vertical" size={20} color={iconColor}/>
                    </View>
                    <View style={styles.row02}>
                        <Text style={styles.numRatingText}> {show.rating.average ? show.rating.average : 0}</Text>
                        <Star score={show.rating.average ? show.rating.average : 0} style={styles.stars}/>

                    </View>

                </View>

            </ImageBackground>
        </TouchableHighlight>
    )
}


let ws = Dimensions.get('window'). width;
let hs = Dimensions.get('window'). height;
let theRadius = 25;
let fontTitleSize = ws * 0.037 * 1.6;
let fontInfoNumSize = ws * 0.037 * 1.5;
let iconColor = "#e6e6e6"

const styles = StyleSheet.create({
    mainContainer:{
        width: ws - 20,
        height: ws  - 20,
        borderRadius: theRadius,
        alignSelf: 'center',
        marginVertical: 20,
        elevation: 3,
        backgroundColor: 'white'
    },
    img:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    containerRadius:{
        borderRadius: theRadius
    },
    contentContainer:{
        height: hs * 0.15,
        backgroundColor: 'rgba(0, 0, 0, 0.72)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomLeftRadius: theRadius,
        borderBottomRightRadius: theRadius,
        justifyContent: 'center'
    },
    nameText:{
        color: '#fff',
        fontSize: fontTitleSize ,
        marginLeft: 10
    },
    row01:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row02:{
        flexDirection: 'row',
    },
    numRatingText:{
        fontSize: fontInfoNumSize,
        paddingHorizontal: 5,
        color: 'white'
    },
    stars:{
        width: 300,
        height: 30
    }

})
export default Show;