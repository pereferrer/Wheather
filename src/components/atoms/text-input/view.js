import React from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

class Input extends React.Component {
  render() {
    const {
      label,
      value,
      onChangeText,
      error,
      style,
      placeholder,
      keyboardType,
    } = this.props;

    return (
      <View style={{...styles.inputContainer, ...style}}>
        {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
        <TextInput
          style={styles.inputText}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
        {error ? <Text style={styles.inputError}>{error}</Text> : null}
      </View>
    );
  }
}

Input.defaultProps = {
  placeholder: '',
  style: {},
  keyboardType: 'default',
};

Input.propTypes = {
  labe: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  error: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
};

export default Input;
