import React from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import {Card, Button, ListItem, Icon} from 'react-native-elements'
import { bool } from 'prop-types';

export default class ShopList extends React.Component {
    render() {
        return (
            <Card>
                <Text style = {{fontWeight: "bold", fontSize: "30px", marginBottom: 10}}>Shopping List</Text>
                <Text style = {{marginBottom: 5, fontSize: "20px"}}>Bananas</Text>
                <Text style = {{marginBottom: 5, fontSize: "20px"}}>Whole Wheat Bread</Text>
                <Text style = {{marginBottom: 5, fontSize: "20px"}}>Ramen</Text>
                <Text style = {{marginBottom: 5, fontSize: "20px"}}>Chocolate Milk</Text>
            </Card>
        );

    }

}