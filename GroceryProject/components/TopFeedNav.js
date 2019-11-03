import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBarNav from 'top-bar-nav';
import { Headline } from 'react-native-paper';
 
const Scene = ({ index }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>{index}</Text>
    </View>
);
 
const ROUTES = {
    Scene
    // ideally you would have a ROUTES object with multiple React component scenes
};
 
// There are three types of labels (image, text, and element)
const ROUTESTACK = [
    { text: 'All', title: 'Scene' }, // title is just the name of the Component being rendered.  See the renderScene property below
    { text: 'Shops', title: 'Scene' },
    { text: 'Exchanges', title: 'Scene'}
];
 
export default class TopFeedNav extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TopBarNav
                    // routeStack and renderScene are required props
                    routeStack={ROUTESTACK}
                    renderScene={(route, i) => {
                        // This is a lot like the now deprecated Navigator component
                        let Component = ROUTES[route.title];
                        return <Component index={i} />;
                    }}
                    // Below are optional props
                    headerStyle={[styles.headerStyle, { paddingTop: 30},]} // probably want to add paddingTop if using TopBarNav for the  entire height of screen to account for notches/status bars
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
        borderColor: '#e6faff',
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
        backgroundColor: '#e6faff',
        width: 40
    },
});