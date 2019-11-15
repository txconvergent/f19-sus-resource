import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {Card, Button, ListItem, Icon} from 'react-native-elements'


export default class AllComponent extends React.Component {
    render() {
        return (<ScrollView>
            <Card image={require('./../../assets/heb.png')}>
              <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 0}}>HEB Run!</Text>
              <Text style={{marginBottom: 0}}>
                5:30pm | Jessica B.
              </Text>
              <Text style={{marginBottom: 10, color: 'gray'}}>Hancock Center</Text>
              <Button
                icon={<Icon name="add" color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Join This Group'
                />
            </Card>
            <Card>
              <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 0}}>4 Bananas</Text>
              <Text style={{marginBottom: 0}}>
                8:30pm | David Y. | Free
              </Text>
              <Text style={{marginBottom: 10, color: 'gray'}}>Skyloft Lobby</Text>
              <Button
                icon={<Icon name='message' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Message' />
            </Card>
          </ScrollView>);
    }
}