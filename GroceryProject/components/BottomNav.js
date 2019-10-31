/* -- Bottom navigation: quick navigation in bottom bar */
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import FeedComponent from './feed';
import ListsComponent from './lists';
import MessagesComponent from './messages';
import ProfileComponent from './profile';

const FeedRoute = () => <FeedComponent></FeedComponent>;

const ListsRoute = () => <ListsComponent></ListsComponent>;

const MessagesRoute = () => <MessagesComponent></MessagesComponent>;

const ProfileRoute = () => <ProfileComponent></ProfileComponent>

export default class BottomNavigatonComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'feed', title: 'Feed', icon: 'queue-music' },
      { key: 'lists', title: 'Lists', icon: 'album' },
      { key: 'messages', title: 'Messages', icon: 'recent_actors' },
      { key: 'profile', title: 'Profile', icon: 'recent_actors' },
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
      />
    );
  }
}