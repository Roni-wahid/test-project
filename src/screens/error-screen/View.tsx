import {View, Text, Image} from 'react-native';
import React from 'react';
import t from '../../styles/theme';

const ErrorView = () => {
  return (
    <View style={[t.flex1, t.bgWhite, t.itemsCenter, t.justifyCenter]}>
      <Image
        source={require('../../assets/images/warning.png')}
        style={(t.w44, t.h44)}
        resizeMode="contain"
      />
      <View style={[t.mT5]}>
        <Text style={[t.text2xl, t.fontSansBold, t.textBlack]}>
          Update Failed !
        </Text>
      </View>
    </View>
  );
};

export default ErrorView;
