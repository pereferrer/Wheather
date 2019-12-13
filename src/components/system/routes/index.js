import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {
  Location,
  LocationsDetail,
} from '../../pages';
import colors from '../../../assets/colors';
import { locations } from '../../../redux';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Location" component={Location} hideNavBar={true} />
          <Scene
            key="LocationsDetail"
            component={LocationsDetail}
            navigationBarStyle={{backgroundColor: colors.navBar}}
            backButtonTextStyle={{color: colors.white}}
            backButtonTintColor={colors.white}
            backTitleEnabled={true}
          />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
