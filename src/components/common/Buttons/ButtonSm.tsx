import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import t from '../../../styles/theme';

const ButtonSm = () => {
  return (
    <TouchableOpacity
      style={[
        t.h12,
        t.w12,
        t.bgWhite,
        t.rounded,
        t.itemsCenter,
        t.justifyCenter,
      ]}>
      <Image
        source={require('../../../assets/images/back-arrow.png')}
        style={[t.w4, t.h4]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default ButtonSm;
