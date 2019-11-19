import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBarNav from 'top-bar-nav';
import Messages from './../messages.js';
import ShopList from './shopList.js';
import ShopPeople from './shopPeople.js';
 
const ROUTES = {
    Messages,
    ShopList,
    ShopPeople
    // ideally you would have a ROUTES object with multiple React component scenes
};
 
const ROUTESTACK = [
    { text: 'Chat', title: 'Messages' },
    { text: 'List', title: 'ShopList' }, // title is just the name of the Component being rendered.  See the renderScene property below
    { text: 'People', title: 'ShopPeople' }
];
 
export default class ShopsTopNav extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
            <Text style={{fontSize: 30, fontWeight: "bold", marginBottom: 0, paddingTop: 45, paddingLeft: 30}}>HEB Run!</Text>
            <Text style={{marginBottom: 0, paddingLeft: 30, fontSize: 20}}>5:30pm</Text> 
            <Text style={{marginBottom: 0, paddingLeft: 30, fontSize: 20}}>Hancock Center</Text> 
                <TopBarNav
                    // routeStack and renderScene are required props
                    routeStack={ROUTESTACK}
                    renderScene={(route, i) => {
                        // This is a lot like the now deprecated Navigator component
                        let Component = ROUTES[route.title];
                        return <Component index={i} />;
                    }}
                    // Below are optional props
                    headerStyle={[styles.headerStyle, { paddingTop: 50 }]} // probably want to add paddingTop if using TopBarNav for the  entire height of screen to account for notches/status bars
                    labelStyle={styles.labelStyle}
                    underlineStyle={styles.underlineStyle}
                    imageStyle={styles.imageStyle}
                    sidePadding={40} // Can't set sidePadding in headerStyle because it's needed to calculate the width of the tabs
                    inactiveOpacity={1}
                    fadeLabels={true}
                />
            </View>
        );
    }
    
}
 
const styles = StyleSheet.create({
    headerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff'
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    },
    imageStyle: {
        height: 20,
        width: 20,
        tintColor: '#e6faff'
    },
    underlineStyle: {
        height: 3.6,
        backgroundColor: '#7dcf85',
        width: 40
    }
});