import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import t from '../../../styles/theme';

const MenuTab = () => {
  return (
    <TouchableOpacity
      style={[
        t.h9,
        t.roundedSm,
        t.bgWhite,
        t.justifyCenter,
        t.pX4,
        t.selfStart,
        t.mR2,
      ]}>
      <Text style={[t.fontSansMedium, t.textSm, t.textGray600]}>Beverages</Text>
    </TouchableOpacity>
  );
};

export default MenuTab;
