/* -- Bottom navigation: quick navigation in bottom bar */
import * as React from 'react';
import { BottomNavigation, Text, Image, List } from 'react-native-paper';
import FeedComponent from './feed';
import ListsComponent from './lists';
import MessagesComponent from './messages';
import ProfileComponent from './profile';
import ProfileIcon from './../assets/profile.png';
import MessagesIcon from './../assets/messages.png';
import FeedIcon from './../assets/feed.png';
import ListIcon from './../assets/list.png';



const FeedRoute = () => <FeedComponent></FeedComponent>;

const ListsRoute = () => <ListsComponent></ListsComponent>;

const MessagesRoute = () => <MessagesComponent></MessagesComponent>;

const ProfileRoute = () => <ProfileComponent></ProfileComponent>

export default class BottomNavigatonComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'feed', title: 'feed', icon: FeedIcon, color: '#ffffff' },
      { key: 'lists', title: 'lists', icon: ListIcon,  color: '#ffffff' },
      { key: 'messages', title: '', icon: MessagesIcon,  color: '#ffffff' },
      { key: 'profile', title: '', icon: ProfileIcon,  color: '#ffffff' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    feed: FeedRoute,
    lists: ListsRoute,
    messages: MessagesRoute,
    profile: ProfileRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        activeColor='#7dcf85'
        inactiveColor='#828282'
      />
    );
  }
}