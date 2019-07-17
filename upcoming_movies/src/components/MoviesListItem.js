import React from 'react';
import { Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import getScore from '../methods/getScore';
import { ImageUrl, ImageSize } from '../api/api-url';

const MoviesListItem = (props) => (
    <Card>
      <CardSection>
        <View style={styles.imageContainerStype}>
          <Image
            style={styles.imageStyle}
            source={{ uri: `${ImageUrl}${ImageSize}${props.movie.poster_path}` }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.movieTextStyle}>
            {props.movie.title}
          </Text>
          <Text style={styles.releaseDateAndRatingStyle}>
            Rating: {getScore(props.movie.vote_average)}
          </Text>
          <Text style={styles.releaseDateAndRatingStyle}>
            In theatres: {props.movie.release_date}
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
          <Button
            onPress={() => {
            Actions.summaryDetail({ movie: props.movie, title: props.movie.title });
            // Actions.refresh();
        }}>
            Summary
          </Button>
        </View>
      </CardSection>
    </Card>
);

const styles = {

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
  },

  movieTextStyle: {
    fontSize: 19,
    color: '#a52a2a',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  releaseDateAndRatingStyle: {
    fontSize: 15,
    color: '#4b0082',
    fontWeight: '500',
  },

  moreInfoViewStyle: {
    flex: 1,
    alignItems: 'center'
  },

  moreInfoTextStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#a52a2a'
  },

  imageStyle: {
    height: 175,
    width: 125
  },

  imageContainerStype: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
};

export default MoviesListItem;
