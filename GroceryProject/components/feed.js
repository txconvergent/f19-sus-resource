import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import TopFeedNav from './feedComponents/TopFeedNav';

const styles = StyleSheet.create({
    plusButton: {
        width: 56,
        height: 56,
        position: "absolute",
        right: 10,
        bottom: 100
    }
})

export default class FeedComponent extends React.Component {

    render() {
        return (
            <TopFeedNav></TopFeedNav>
            );
    }
}