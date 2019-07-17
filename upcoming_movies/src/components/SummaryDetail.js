import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { ImageUrl, ImageSize } from '../api/api-url';

export default class SummaryDetail extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: `${ImageUrl}${ImageSize}${this.props.movie.poster_path}` }}
          style={styles.imageStyle}
        />
        <View style={styles.viewStyle}>
          <Text style={styles.movieTextStyle}>
            {this.props.movie.overview}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {

  movieTextStyle: {
    fontSize: 19,
    color: '#4b0082',
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 8,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#a52a2a'
  },

  viewStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageStyle: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    opacity: 0.3
  }

};
