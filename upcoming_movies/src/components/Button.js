import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#f0f0f5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a52a2a',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 6
  },

  textStyle: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#a52a2a',
    fontWeight: '600',
    padding: 5
  }

};

export default Button;
