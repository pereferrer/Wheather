import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {TextInput, Button} from '../../atoms';
import _ from 'lodash';

class LocationsAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: _.get(props, 'location.name', ''),
      lat: _.get(props, 'location.lat', ''),
      lon: _.get(props, 'location.lat', ''),
      errors: {},
    };
    
  }

  _onSubmit = () => {
    const {name, lat, lon, temp} = this.state;
    let errors = {};
    if (!name) {
      errors.name = 'Campo obligatorio';
    }
    if (!lat) {
      errors.name = 'Campo obligatorio';
    }
    if (!lon) {
      errors.name = 'Campo obligatorio';
    }

    this.setState({errors});
    const data = {
      coord: {
        lat,
        lon,
      },
      main: {
        temp,
      },
      name,
      lat,
      lon,
    };
    this.props.onSubmit(data);
   };
  
  
  render() {
    const {isFetching} = this.props;
    const {name, lat, lon, temp, errors} = this.state;
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{flexGrow: 1}}>
          <TouchableOpacity
            onPress={this._onImageTapped}
            style={styles.imageContainer}>
          </TouchableOpacity>
          
            <TextInput style={styles.inputText}
              label={'Nombre'}
              placeholder = "Introduce tu nombre"              
              value={name}
              onChangeText={text => this.setState({name: text})}
              error={_.get(errors, 'name', '')}
            />

            <TextInput style={styles.inputText}
              label={'Latitud'}
              placeholder = "Introduce la latitud"              
              value={lat}
              onChangeText={text => this.setState({lat: text})}
              error={_.get(errors, 'lat', '')}
            />
            <TextInput style={styles.inputText}
              label={'Longitud'}
              placeholder = "Introduce la longitud"              
              value={lon}
              onChangeText={text => this.setState({lon: text})}
              error={_.get(errors, 'lon', '')}
            />

            <TextInput style={styles.inputText}
              label={'Temperatura'}
              placeholder = "Introduce la temperatura"              
              value={temp}
              onChangeText={text => this.setState({temp: text})}
              error={_.get(errors, 'lon', '')}
            />
          
          <Button
            label={'Guardar'}
            style={{marginHorizontal: 20, marginVertical: 20, backgroundColor: '#7a42f4'}}
            isFetching={isFetching}
            onPress={this._onSubmit}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

LocationsAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  location: PropTypes.object,
  isFetching: PropTypes.bool,
};

export default LocationsAdd;
