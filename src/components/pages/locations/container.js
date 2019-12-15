import {connect} from 'react-redux';
import {locationsActions} from '../../../redux/Locations';
import View from './view';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = state => {
  return {
    locationList: state.locations.list,
    locationsTotal: state.locations.total,
    locationsOffset: state.locations.offset,
    locationsFetching: state.locations.isFetching,

  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initList: () => dispatch(locationsActions.initList()),
    fetchNextPage: () => dispatch(locationsActions.fetchNextPage()),
    onLocationSelected: location => {
      dispatch(locationsActions.updateItem(location));
      Actions.LocationsDetail({title: location.name});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);

