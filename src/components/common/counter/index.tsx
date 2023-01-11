import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import t from '../../../styles/theme';

const Counter = () => {
  return (
    <View style={[t.bgWhite, t.flexRow, t.p2, t.justifyBetween]}>
      <TouchableOpacity style={[t.w6, t.h6]}>
        <Ionicons name="remove" size={24} color="black" />
      </TouchableOpacity>
      <View style={[t.w6, t.h6, t.itemsCenter, t.justifyCenter]}>
        <Text style={[t.textBlack]}>1</Text>
      </View>
      <TouchableOpacity style={[t.w6, t.h6]}>
        <Ionicons name="add" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
