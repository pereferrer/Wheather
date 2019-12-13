import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles, {width} from './styles';
import _ from 'lodash';


class LocationCard extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const {location, onPress} = this.props;
    const name = _.get(location, 'name', '');
    const icon = _.get(location, 'weather.0.icon', '');
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPress(location)}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Image source={{uri: "http://openweathermap.org/img/wn/" + icon + ".png"}} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

LocationCard.defaultProps = {
  location: null,
  onPress: null,
};

LocationCard.propTypes = {
  location: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default LocationCard;
