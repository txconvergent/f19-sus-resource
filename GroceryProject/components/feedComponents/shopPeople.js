import React from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import {Card, Button, ListItem, Icon} from 'react-native-elements'

export default class ShopPeople extends React.Component {
    render() {
        return (
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <View>
                    <Image style={styles.avatar}
                    source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <Text style={styles.name}>Trent Becker</Text>

                </View>
                <View>
                    <Image style={styles.avatar}
                    source={{uri: 'https://bootdey.com/img/Content/avatar/avatar4.png'}}/>
                    <Text style={styles.name}>John Putnam</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginHorizontal: 20,
        marginTop: 10,
      },

    name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
        marginHorizontal: 27,
      },
});