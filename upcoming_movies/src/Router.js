import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MoviesList from './components/MoviesList';
import SummaryDetail from './components/SummaryDetail';

const RouterComponent = () => (
  <Router
    navigationBarStyle={styles.viewStyle}
    titleStyle={styles.textStyle}
    sceneStyle={{ paddingTop: 53 }}
  >
    <Scene key="upcoming" component={MoviesList} title="Upcoming Movies" />

  <Scene
    key="summaryDetail"
    component={SummaryDetail}
    title="Summary"
    leftButtonIconStyle={{ tintColor: '#a52a2a' }}
  />
  </Router>
);

const styles = {

  viewStyle: {
    backgroundColor: '#f0f0f5',
  },

  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a52a2a',
    fontStyle: 'italic'
  }

};

export default RouterComponent;
