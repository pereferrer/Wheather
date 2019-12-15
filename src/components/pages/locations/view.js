import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl, View} from 'react-native';
import styles from './styles';
import {LocationCard} from '../../molecules';

class Location extends Component {
  constructor(props) {
    super(props);
    props.initList();
  }

  _onLocationSelected = location => {
    this.props.onLocationSelected(location);
    console.log(location);
  };

  _onEndReached = () => {
    const {locationsTotal, locationsOffset, locationList, locationsFetching} = this.props;
    if (
      locationList.length &&
      !locationsFetching &&
      locationsTotal > locationList.length
    ) {
      this.props.fetchNextPage();
    }
  }

  _renderItem = ({item}) => {
    return (
      
      <LocationCard location={item} 
      onPress={this.props.onLocationSelected}
    />
    );    
  };

  renderSeparatorView = () => {
    return (
      <View style={{
          height: 1, 
          width: "100%",
          backgroundColor: "#CEDCCE",
        }}
      />
    );
  };

  render() {
    const {locationList,
      locationsTotal,
      locationsFetching,
      locationsOffset, 
      initList} = this.props;
      console.log("t" + locationsTotal);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
         ItemSeparatorComponent={this.renderSeparatorView}

        refreshControl={
          <RefreshControl
            refreshing={locationsFetching}
            onRefresh={initList}
            colors={['#FFF']}
            tintColor={'white'}
          />
        }
          onEndReached={this._onEndReached}
          data={locationList}
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
  locationsFetching: PropTypes.bool,
  locationList: PropTypes.arrayOf(PropTypes.object).isRequired,
  locationsTotal: PropTypes.number,
  locationsOffset: PropTypes.number,
  initList: PropTypes.func.isRequired,
  onLocationSelected: PropTypes.func.isRequired,
  fetchNextPage: PropTypes.func,
};

export default Location;
