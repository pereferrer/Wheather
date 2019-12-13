import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
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

class LocationsDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("Detail")
  }



  render() {
    const {location, characterFetching} = this.props;
    const name = _.get(location, 'name', '');
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <InfoBox label={'2'} value={"2"} />
          </View>
        </ScrollView>
      </SafeAreaView>
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
    <Text style={styles.value}>{value}</Text>
  </View>
);

InfoBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
