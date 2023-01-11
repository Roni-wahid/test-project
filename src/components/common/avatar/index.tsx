import {View, Text, Image} from 'react-native';
import React from 'react';
import t from '../../../styles/theme';

interface AvatarProps {
  size?: 'sm' | 'md';
  label?: string;
  source?: any;
  bg?: any;
}

const Avatar = ({size, label, source, bg}: AvatarProps) => {
  return (
    <View
      style={[
        size === 'sm' ? [t.w12, t.h12] : size === 'md' ? [t.w14, t.h14] : null,
        t.roundedFull,
        t.bgWhite,
        t.itemsCenter,
        t.justifyCenter,
        bg,
      ]}>
      {label && (
        <Text
          style={[
            t.textGray800,
            t.fontSansBold,
            size === 'sm' ? t.textBase : size === 'md' ? t.textLg : null,
          ]}>
          {label}
        </Text>
      )}
      {source && (
        <Image
          source={source}
          style={[
            size === 'sm'
              ? [t.w10, t.h10]
              : size === 'md'
              ? [t.w12, t.h12]
              : null,
          ]}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default Avatar;
