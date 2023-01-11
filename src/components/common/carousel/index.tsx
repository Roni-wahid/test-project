import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {colors} from '../../../styles/colors';

const C_Carousel = () => {
  const width = Dimensions.get('window').width;
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        //onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: colors.secondary,
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default C_Carousel;
