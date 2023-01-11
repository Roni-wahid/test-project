import {View, Text} from 'react-native';
import React from 'react';
import t from '../../../styles/theme';

const Badge = ({label}) => {
  return (
    <View
      style={[
        t.bgSecondary,
        //t.itemsCenter,
        t.justifyCenter,
        t.selfStart,
        t.rounded,
        t.p1,
      ]}>
      <Text>{label}</Text>
    </View>
  );
};

export default Badge;
