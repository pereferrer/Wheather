import {connect} from 'react-redux';
import {LocationsForm} from '../../organisms';
import {locationsActions} from '../../../redux/Locations';

const mapStateToProps = state => {
  return {
    isFetching: state.locations.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: data => dispatch(locationsActions.postLocation(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsForm);
