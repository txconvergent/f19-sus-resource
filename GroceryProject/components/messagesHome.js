import React from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import {Card, Button, ListItem, Icon} from 'react-native-elements'
import Messages from './messages.js';

export default class AllComponent extends React.Component {
  state = {
    title: "Mark",
    location: "Hancock Center",
    name: "Trent B.",
    time: "5:30pm",
    currentPage: "home page"
  }

    componentWillMount() {

    }

    render() {
      if(this.state.currentPage == "home page") {
        return (<ScrollView>
            <TouchableOpacity style={{ height: 150, marginTop: 50 }}
                onPress={()=>{this.setState({currentPage: "newMessage"})}}>
                  <Icon name="message" color='#ff0000' />
                <Text style={{fontSize: 40, fontWeight: "bold", marginBottom: 75}}>{this.state.title}</Text>
            </TouchableOpacity>
            <View style={styles.infoContent}></View>
            <TouchableOpacity style={{ height: 150, marginTop: 10 }}
                onPress={()=>{this.setState({currentPage: "newMessage"})}}>
                  <Icon name="message" color='#ff0000' />
                <Text style={{fontSize: 40, fontWeight: "bold", marginBottom: 75}}>{this.state.title}</Text>
            </TouchableOpacity>
            <View style={styles.infoContent}></View>
            <TouchableOpacity style={{ height: 150, marginTop: 10 }}
                onPress={()=>{this.setState({currentPage: "newMessage"})}}>
                  <Icon name="message" color='#ff0000' />
                <Text style={{fontSize: 40, fontWeight: "bold", marginBottom: 75}}>{this.state.title}</Text>
            </TouchableOpacity>
            <View style={styles.infoContent}></View>
            <TouchableOpacity style={{ height: 150, marginTop: 10 }}
                onPress={()=>{this.setState({currentPage: "newMessage"})}}>
                  <Icon name="message" color='#ff0000' />
                <Text style={{fontSize: 40, fontWeight: "bold", marginBottom: 75}}>{this.state.title}</Text>
            </TouchableOpacity>
            <View style={styles.infoContent}></View>                
          </ScrollView>);
      }

      if(this.state.currentPage == "newMessage") {
        return <Modal>
          <TouchableOpacity onPress={()=>{this.setState({currentPage: "home page"})}} 
          style={{width: 33, height: 33, position: "absolute", top: 45, right: 16, zIndex: 999}}>
        <Image source={require('./../assets/Close.png')}></Image>
        </TouchableOpacity>
        <Messages></Messages>
        </Modal>;
      }
    }
}
const styles = StyleSheet.create({
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:15, paddingBottom: 10,
    borderBottomColor: '#778899', borderBottomWidth: 1,
  }});