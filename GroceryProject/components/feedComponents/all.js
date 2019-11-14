import React from 'react';
import { View, Text, Image } from 'react-native';
import {Card, Button, ListItem, Icon} from 'react-native-elements'


export default class AllComponent extends React.Component {
    render() {
        return (<Card
            title='HELLO WORLD'
            image={require('./../../assets/FAB.png')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>);
    }
}