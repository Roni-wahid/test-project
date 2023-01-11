import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import t from '../../../styles/theme';

const AddressFilter = () => {
  return (
    <View style={[t.flexRow, t.itemsCenter, t.justifyBetween, t.pX3]}>
      <View style={[t.flexRow, t.itemsCenter, t.flex3]}>
        <View>
          <Image
            source={require('../../../assets/images/location.png')}
            style={[t.w5, t.h6]}
          />
        </View>
        <View style={[t.mX2, t.flex3]}>
          <Text
            style={[
              t.textGray900,
              t.fontSansMedium,
              t.textBase,
              t.leadingNone,
            ]}>
            Home
          </Text>
          <Text style={[t.textGray900, t.fontSans, t.textSm]}>
            242 ST Marks Eve, Finland
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/filter.png')}
          style={[t.w6, t.h6]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddressFilter;
