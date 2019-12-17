import React from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
import {Card, Button, ListItem, Icon} from 'react-native-elements'
import ShopsTopNav from './shopsTopNav.js';
import Messages from './../messages.js';
import Messages2 from './../messages2.js';

export default class AllComponent extends React.Component {
  state = {
    title: "HEB Run!",
    location: "Hancock Center",
    name: "Trent B.",
    time: "5:30pm",
    currentPage: "mainFeed"
  }

    componentWillMount() {

    }

    render() {
      if(this.state.currentPage == "mainFeed") {
        return (<ScrollView>
            <Card image={require('./../../assets/heb.png')}>
        <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 0}}>{this.state.title}</Text>
              <Text style={{marginBottom: 0}}>
                {this.state.time} | {this.state.name}
              </Text>
              <Text style={{marginBottom: 10, color: 'gray'}}>{this.state.location}</Text>
              <Button
                icon={<Icon name="add" color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#7dcf85'}}
                title='Join This Group'
                onPress={()=>{this.setState({currentPage: "joinGroup"})}}
                />
            </Card>
            <Card>
              <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 0}}>4 Bananas</Text>
              <Text style={{marginBottom: 0}}>
                8:30pm | John P. | Free
              </Text>
              <Text style={{marginBottom: 10, color: 'gray'}}>Skyloft Lobby</Text>
              <Button
                icon={<Icon name='message' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,  backgroundColor: '#7dcf85'}}
                title='Message' 
                onPress={()=>{this.setState({currentPage: "newMessage"})}}
                />
            </Card>
          </ScrollView>);
      }
      if(this.state.currentPage == "joinGroup") {
        return <Modal>
          <TouchableOpacity onPress={()=>{this.setState({currentPage: "mainFeed"})}} 
          style={{width: 33, height: 33, position: "absolute", top: 45, right: 16, zIndex: 999}}>
        <Image source={require('./../../assets/Close.png')}></Image>
        </TouchableOpacity>
        <ShopsTopNav title={this.state.title} location={this.state.location} name={this.state.name} time={this.state.time} currentPage={this.state.currentPage}></ShopsTopNav>
        </Modal>;
      }
      if(this.state.currentPage == "newMessage") {
        return <Modal>
          <TouchableOpacity onPress={()=>{this.setState({currentPage: "mainFeed"})}} 
          style={{width: 33, height: 33, position: "absolute", top: 45, right: 16, zIndex: 999}}>
        <Image source={require('./../../assets/Close.png')}></Image>
        </TouchableOpacity>
        <Messages2></Messages2>
        </Modal>;
      }
    }
}