import React from 'react';
import {FlatList, ActivityIndicator, View, Dimensions, StyleSheet} from 'react-native';
import Show from '../components/Show';
import Footer from '../components/Footer';
import Header from '../components/Header';



export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        this.fetchMovies();
    }
    //this function used in the header and pass as param to header component
    onChange =(text)=>{
         this.fetchMovies(text)
    }

    // i start the list with search of any "game" related movies
    fetchMovies = async (search = 'game') => {
        try {
            const response = await fetch(`http://api.tvmaze.com/search/shows?q=${search}`);
            const responseJson = await response.json();

            await this.setState({
                isLoading: false,
                dataSource: responseJson,
            });

        } catch (e) {
            console.log('erroe', e);
        }
    };



    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.indicaiterContainer}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={styles.mainContainer}>
                <Header onChange={this.onChange}/>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <Show item={item}
                              navigate={() => this.props.navigation.navigate('ShowDetails', {show: item})}/>
                    }
                    keyExtractor={(item, index) => item.show.id.toString()}
                />
                <Footer/>
            </View>
        );
    }
}

// I use a dimensions for responsive layout
let ws = Dimensions.get('window').width;
let hs = Dimensions.get('window').height;
const styles = StyleSheet.create({
    indicaiterContainer:{
        flex: 1,
        padding: 20
    },
    mainContainer:{
        flex: 1,
        backgroundColor: 'white'
    }
})