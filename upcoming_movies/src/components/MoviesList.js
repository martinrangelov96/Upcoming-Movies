import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MoviesListItem from './MoviesListItem';

class MoviesList extends Component {

  state = { movies: [] };

  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=22d8da68cffba151bfa886d5003aac02&language=en-US&page=1')
      .then(response => this.setState({ movies: response.data.results }));
  }

  renderMovies() {
    return this.state.movies.map(movie =>
      <MoviesListItem key={movie.id} movie={movie} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderMovies()}
      </ScrollView>
    );
  }
}

export default MoviesList;
