import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TopBarNav from 'top-bar-nav';
import ExchangesComponent from './exchanges.js';
import AllComponent from './all.js';
import ShopsComponent from './shops.js';
 
const ROUTES = {
    AllComponent,
    ShopsComponent,
    ExchangesComponent
    // ideally you would have a ROUTES object with multiple React component scenes
};
 
// There are three types of labels (image, text, and element)
const ROUTESTACK = [
    { text: 'All', title: 'AllComponent'}, // title is just the name of the Component being rendered.  See the renderScene property below
    { text: 'Shops', title: 'ShopsComponent' },
    { text: 'Exchanges', title: 'ExchangesComponent'}
];
 
export default class TopFeedNav extends React.Component {
    render() {
        return (
          <View style={{ flex: 1 }}>
              <Image source={require('./../../assets/FAB.png')} style={{width: 56, height: 56, position: "absolute", bottom: 16, right: 16}}></Image>
                <TopBarNav
                    // routeStack and renderScene are required props
                    routeStack={ROUTESTACK}
                    renderScene={(route, i) => {
                        let Component = ROUTES[route.title];
                        return <Component index={i} />;
                    }}
                    // Below are optional props
                    headerStyle={[styles.headerStyle, { paddingTop: 70}]} // probably want to add paddingTop if using TopBarNav for the  entire height of screen to account for notches/status bars
                    labelStyle={styles.labelStyle}
                    underlineStyle={styles.underlineStyle}
                    imageStyle={styles.imageStyle}
                    sidePadding={20} // Can't set sidePadding in headerStyle because it's needed to calculate the width of the tabs
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
        fontSize: 20,
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
    },
});