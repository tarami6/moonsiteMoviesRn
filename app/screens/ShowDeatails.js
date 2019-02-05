import React from "react";
import {View, Text, Image, Dimensions,  ScrollView, StyleSheet} from "react-native";
import Star from 'react-native-star-view';  /*  I made a change inside node module from 5 to 10 stars*/
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../components/Footer'




export default class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: this.props.navigation.state.params.show}
    }

    render() {
        let show = this.state.show.show;
        // the summary that i get from api comes with some html tags so I rid of it
        let summary = show.summary ? show.summary.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/gi, ''): 'No info';

        return (
            <View style={styles.container}>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: show.image? show.image.medium: 'none'}}
                    />
                    <View style={styles.infoContainer}>

                        <Text style={styles.nameText}>{show.name}</Text>

                        <View style={styles.row01}>
                            <Star score={show.rating.average ? show.rating.average : 0} style={styles.stars}/>
                            <Text style={styles.numRatingText}>{show.rating.average ? show.rating.average : 0}</Text>
                        </View>
                        <View style={styles.row02}>
                            <IconMaterial name="movie" size={iconSize} color={iconColor}/>
                            <Text style={styles.infoText}>{show.genres.length > 0 ? show.genres.join("-") : 'Sorry no info'}</Text>
                        </View>


                        <View style={styles.row02}>
                            <Icon name="tv" size={iconSize} color={iconColor}/>
                            <Text style={{

                            }}>{show.network ? show.network.name : 'no info'}</Text>
                            <Icon name="language" size={iconSize} color={iconColor}/>
                            <Text style={styles.infoText}>{show.language}</Text>
                        </View>
                        {show.schedule.days.length > 3 ?
                            <View style={styles.column01}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name="calendar" size={iconSize} color={iconColor}/>
                                    <Text style={styles.infoText}>{show.schedule.days.length > 0 ? show.schedule.days.join("-") : 'every day'}</Text>
                                </View>
                                <View style={styles.row03}>
                                    <Icon name="clock-o" size={iconSize} color={iconColor}/>
                                    <Text style={styles.infoText}>{show.schedule.time}</Text>
                                </View>
                            </View> :
                            <View style={{flexDirection: 'row', padding: 5}}>
                                <Icon name="calendar" size={iconSize} color={iconColor}/>
                                <Text style={styles.infoText}>{show.schedule.days.length > 0 ? show.schedule.days.join("-") : 'every day'}</Text>
                                <Icon name="clock-o" size={iconSize} color={iconColor}/>
                                <Text style={styles.infoText}>{show.schedule.time}</Text>
                            </View>
                        }


                        <Text style={styles.paragraphText}>{summary}</Text>


                    </View>

                </View>
            </ScrollView>
                <Footer/>
            </View>
        );
    }
}


let ws = Dimensions.get('window').width;
let hs = Dimensions.get('window').height;
let iconColor = "#e6e6e6";
let iconSize = 20;
let nameTitleSize = ws * 0.037 * 2;
let fontInfoNumSize = ws * 0.037 * 1.5;
let infoTextSize = ws * 0.037 * 1.2;
let paragraphSize = ws * 0.037 ;


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    contentContainer:{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    img:{
        width: ws,
        height: ws
    },
    infoContainer:{
        width: ws,
    },
    nameText:{
        backgroundColor: 'black',
        color: 'white',
        fontSize: nameTitleSize,
        padding: 5
    },
    row01:{
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginBottom: 5,
        marginTop: 10
    },
    row02:{
        flexDirection: 'row',
        padding: 5
    },
    row03:{
        flexDirection: 'row'
    },
    stars:{
        width: 300,
        height: 30,
    },
    numRatingText:{
        fontSize: fontInfoNumSize,
        paddingHorizontal: 5,
    },

    infoText:{
        fontSize: infoTextSize,
        paddingHorizontal: 5
    },
    column01:{
        flexDirection: 'column',
        padding: 5
    },
    paragraphText: {
        fontSize: paragraphSize,
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 50,
        color: 'black'
    }
})