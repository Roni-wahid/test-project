import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/colors';
import t from '../../../styles/theme';

interface InputProps {
  placeholder?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  keyboardType?: 'default' | 'email-address' | 'number-pad';
  inputType?: 'outline';
  radius?: 'sm' | 'md' | 'lg' | 'none';
}

const Input = ({
  placeholder,
  iconLeft,
  iconRight,
  keyboardType,
  inputType,
  radius,
}: InputProps) => {
  return (
    <View
      style={[
        t.h14,
        t.bgWhite,
        radius === 'sm'
          ? t.roundedSm
          : radius === 'md'
          ? t.rounded
          : radius === 'lg'
          ? t.roundedFull
          : radius === 'none'
          ? t.roundedNone
          : null,
        t.pX5,
        t.itemsCenter,
        t.flexRow,
        inputType === 'outline'
          ? [t.bgTransparent, t.border, t.borderPrimaryDark]
          : null,
      ]}>
      <View>{iconLeft && iconLeft}</View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.black}
        keyboardType={keyboardType}
        style={[t.textBlack, t.textBase, t.flex1, t.pX2]}
      />
      <TouchableOpacity>{iconRight && iconRight}</TouchableOpacity>
    </View>
  );
};

export default Input;
