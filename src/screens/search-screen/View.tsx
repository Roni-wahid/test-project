import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import t from '../../styles/theme';
import Input from '../../components/common/Inputs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';

const SearchView = () => {
  return (
    <View style={[t.flex1, t.bgPaper, t.pX5]}>
      <View style={[t.mT2]}>
        <Input
          placeholder="Search"
          radius="md"
          iconLeft={<Ionicons name="search" size={24} color={colors.black} />}
        />
      </View>
      <View style={[t.mT5]}>
        <Text style={[t.textLg, t.fontSansBold, t.textBlack]}>Food</Text>
      </View>
      <View style={[t.mT3]}>
        <TouchableOpacity
          style={[
            t.h11,
            t.bgWhite,
            t.selfStart,
            t.rounded,
            t.pX4,
            t.justifyCenter,
          ]}>
          <Text style={[t.textBase, t.fontSansMedium, t.textGray800]}>
            Cake
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchView;
