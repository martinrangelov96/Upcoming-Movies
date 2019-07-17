import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (

  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>
      {props.headerText}
    </Text>
  </View>

);

const styles = {

  viewStyle: {
    backgroundColor: '#f0f0f5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative',
  },

  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a52a2a',
    fontStyle: 'italic'
  }

};


export default Header;
