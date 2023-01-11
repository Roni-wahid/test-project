import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import t from '../../styles/theme';

const LoaderView = () => {
  return (
    <View style={[t.flex1, t.bgWhite, t.itemsCenter, t.justifyCenter]}>
      <ActivityIndicator size={'large'} />
      <Text style={[t.textXl, t.fontSansMedium, t.textBlack]}>Loading...</Text>
    </View>
  );
};

export default LoaderView;
