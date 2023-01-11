import {View, Text, Image} from 'react-native';
import React from 'react';
import t from '../../../styles/theme';

interface Card_1Props {
  title?: string;
  source?: any;
}

const Card_1 = ({title, source}: Card_1Props) => {
  return (
    <View style={[t.w60, t.bgWhite, t.rounded, t.overflowHidden]}>
      <Image source={source} style={[t.w60, t.h36]} resizeMode="cover" />
      <View style={[t.p2, t.itemsCenter, t.justifyCenter, t.flex1]}>
        <Text style={[t.textBlack, t.textBase, t.fontSansMedium]}>{title}</Text>
      </View>
    </View>
  );
};

export default Card_1;
