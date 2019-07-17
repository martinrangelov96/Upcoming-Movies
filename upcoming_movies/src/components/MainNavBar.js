import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Header from './Header';
// import SearchTool from './SearchTool';

class MainNavBar extends Component {
  render() {
    return (
      <NavigationBar>
        <View>
          <Header>
            <Text>Upcoming</Text>
          </Header>
        </View>
      </NavigationBar>
    );
  }
}

export default MainNavBar;
