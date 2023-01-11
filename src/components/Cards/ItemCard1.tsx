import {View, Text, Image} from 'react-native';
import React from 'react';
import t from '../../styles/theme';
import Dot from '../ui-components/dot/Dot';

const ItemCard1 = () => {
  return (
    <View style={[t.w32]}>
      <View>
        <Image
          style={[t.w32, t.h32, t.rounded]}
          resizeMode="contain"
          source={{
            uri: 'https://www.seriouseats.com/thmb/aEYbrnuKQ3Ge7T5sd3A0BWQGPLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-CLASSICSMASHEDBURGS-JANJIGIAN-seriouseats-10-8af40a4a1698459c99e7f3c0df7f6a0f.jpg',
          }}
        />
        <View
          style={[
            t.h7,
            t.pX3,
            t.bgSecondary,
            t.absolute,
            t.bottom0,
            t.left0,
            t.itemsCenter,
            t.justifyCenter,
            t.roundedRFull,
            t.roundedBlFull,
            t.opacity80,
          ]}>
          <Text style={[t.fontSansBold]}>50% OFF</Text>
        </View>
      </View>
      <View style={[t.mT1]}>
        <Text style={[t.textGray800, t.textBase, t.fontSans]}>Burger</Text>
      </View>
      <View style={[t.flexRow, t.itemsCenter]}>
        <View style={[t.flexRow, t.itemsCenter, t.mR2]}>
          <View style={[t.mR1]}>
            <Image
              source={require('../../assets/images/star.png')}
              style={[t.w3, t.h3]}
            />
          </View>
          <Text style={[t.textGray800, t.fontSansMedium]}>4.6</Text>
        </View>
        <Dot />
        <View style={[t.flexRow, t.itemsCenter, t.justifyCenter, t.mL2]}>
          <View>
            <Image
              source={require('../../assets/images/time.png')}
              style={[t.w3, t.h3]}
              resizeMode="contain"
            />
          </View>
          <View style={[t.mL1]}>
            <Text style={[t.textGray500, t.fontSans]}>15 min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCard1;
