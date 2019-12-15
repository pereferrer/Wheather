import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {
  Location,
  LocationsDetail,
  LocationsAdd,
} from '../../pages';
import colors from '../../../assets/colors';
import { locations } from '../../../redux';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Location" 
          component={Location} 
          navigationBarStyle={{backgroundColor: colors.navBar, }}
          hideNavBar={false}
          backButtonTextStyle={{color: colors.white}}
          backButtonTintColor={colors.white}
          backTitleEnabled={true}
          title ={'Localizaciones'}
          tintColor='white'
          onRight={() => Actions.LocationsAdd()}
          rightTitle={'Crear'}
            
          
          />
          <Scene
            key="LocationsDetail"
            component={LocationsDetail}
            navigationBarStyle={{backgroundColor: colors.navBar}}
            backButtonTextStyle={{color: colors.white}}
            backButtonTintColor={colors.white}
            backTitleEnabled={true}
            tintColor='white'
          />

          <Scene
            key="LocationsAdd"
            component={LocationsAdd}
            navigationBarStyle={{backgroundColor: colors.navBar}}
            backButtonTextStyle={{color: colors.white}}
            backButtonTintColor={colors.white}
            backTitleEnabled={true}
            tintColor='white'
            title ={'Añadir Localidad'}
          />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
