import React from 'react';
import {Text, View, Image} from 'react-native';
import t from '../../styles/theme';

const CategoryCard1 = () => {
  return (
    <View>
      <View
        style={[
          t.h16,
          t.w16,
          t.rounded,
          t.bgSecondary,
          t.itemsCenter,
          t.justifyCenter,
        ]}>
        <Image
          source={require('../../assets/images/burger.png')}
          style={[t.w7, t.h7]}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={[t.mT1, t.textGray500, t.fontSans, t.textSm]}>Burger</Text>
      </View>
    </View>
  );
};

export default CategoryCard1;
