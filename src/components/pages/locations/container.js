import {connect} from 'react-redux';
import {locationsActions} from '../../../redux/Locations';
import View from './view';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = state => {
  return {
    locationsList: state.locations.list,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchLocationsList: () => dispatch(locationsActions.fetchLocationsList()),
    

    onLocationSelected: location => {
      dispatch(locationsActions.updateItem(location));
      Actions.LocationsDetail({title: location.name});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);

