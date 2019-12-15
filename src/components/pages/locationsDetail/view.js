import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import {LocationCardDetail} from '../../molecules';


class LocationsDetail extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {locations: []};
    console.log("Detail")
  }

  render() {
    const {locationsDetail, locationFetching} = this.props;
    const name = _.get(locationsDetail, 'name', '');
    const lat = _.get(locationsDetail, 'coord.lat', '');
    const lon = _.get(locationsDetail, 'coord.lon', '');
    const icon = _.get(locationsDetail, 'weather.0.icon', '');
    const temp = _.get(locationsDetail, 'main.temp', '');
    console.log(locationsDetail);
    console.log(name);
    return (
      <TouchableOpacity
        style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{"Localidad: "+ name}</Text>
          <Text style={styles.name}>{"Temperatura: " +temp}</Text>
          <Text style={styles.name}>{"Latitud: " + lat}</Text>
          <Text style={styles.name}>{"Longitud: " + lon}</Text>
        </View>
        <Image source={{uri: "http://openweathermap.org/img/wn/" + icon + ".png"}} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

LocationsDetail.propTypes = {
  location: PropTypes.object,
};

export default LocationsDetail;

const InfoBox = ({label, value}) => (
  <View style={styles.infoBox}>
    <Text style={styles.label}>{label}</Text>
  </View>
);

InfoBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
