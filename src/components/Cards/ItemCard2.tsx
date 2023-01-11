import {View, Text, Image} from 'react-native';
import React from 'react';
import t from '../../styles/theme';

const ItemCard2 = () => {
  return (
    <View style={[t.h24, t.bgWhite, t.rounded, t.flexRow]}>
      <View>
        <Image
          style={[t.w24, t.h24, t.rounded]}
          resizeMode="contain"
          source={{
            uri: 'https://www.seriouseats.com/thmb/aEYbrnuKQ3Ge7T5sd3A0BWQGPLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-CLASSICSMASHEDBURGS-JANJIGIAN-seriouseats-10-8af40a4a1698459c99e7f3c0df7f6a0f.jpg',
          }}
        />
      </View>
      <View style={[t.flexRow, t.flex1]}>
        <View style={[t.p3, t.flex2]}>
          <Text style={[t.textGray800, t.fontSansMedium]}>
            Burger With Some
          </Text>
          <Text style={[t.textGray500, t.fontSans]}>In Pizza Mania</Text>
          <Text style={[t.textGray800, t.fontSansBold]}>Price. 152.00</Text>
        </View>
        <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
          <Image
            source={require('../../assets/images/plus-square.png')}
            style={[t.w7, t.h7]}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCard2;
