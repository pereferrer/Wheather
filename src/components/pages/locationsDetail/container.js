import {connect} from 'react-redux';
import View from './view';
import {locationsActions} from '../../../redux';

const mapStateToProps = state => {
  return {
    locationsDetail: state.locations.item,
    locationFetching: state.locations.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteLocation: location =>
      dispatch(locationsDetailActions.deleteLocation(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
