import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {LocationCard} from '../../molecules';

class Location extends Component {
  constructor(props) {
    super(props);
    props.fetchLocationsList();
  }

  _onLocationSelected = location => {
    this.props.onLocationSelected(location);
  };

  _renderItem = ({item}) => {
    return (
      <LocationCard location={item} 
      onPress={this.props.onLocationSelected}
    />
    );    
  };

  render() {
    const {locationsList} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={locationsList}
          renderItem={this._renderItem}
          keyExtractor={(v, i) => `cell-${v.id}`}
          numColumns={1}
          style={styles.list}
        />
      </SafeAreaView>
    );
  }
}

Location.propTypes = {
  locationsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchLocationsList: PropTypes.func.isRequired,
  onLocationSelected: PropTypes.func.isRequired,
};

export default Location;
