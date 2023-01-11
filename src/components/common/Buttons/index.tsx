import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import t from '../../../styles/theme';

interface ButtonProps {
  title?: string;
  variant?: 'primary' | 'secondary' | 'white';
  outline?: boolean;
  full?: boolean;
  bg?: string;
  color?: string;
  shadow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  radius?: 'sm' | 'md' | 'lg' | 'full' | 'none';
  icon?: JSX.Element;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onPress?: any;
}

const Button = ({
  title,
  variant,
  radius,
  size,
  outline,
  icon,
  full,
  bg,
  shadow,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        t.bgSuccess,
        t.selfStart,
        shadow ? t.shadowMd : null,
        //t.shadowMd,
        variant === 'primary'
          ? t.bgPrimary
          : variant === 'secondary'
          ? t.bgSecondary
          : variant === 'white'
          ? t.bgWhite
          : null,
        radius === 'sm'
          ? t.roundedSm
          : radius === 'md'
          ? t.rounded
          : radius === 'lg'
          ? t.roundedLg
          : radius === 'full'
          ? t.roundedFull
          : radius === 'none'
          ? t.roundedNone
          : null,
        size === 'sm'
          ? t.p1
          : size === 'md'
          ? t.p2
          : size === 'lg'
          ? t.p3
          : null,
        full ? [t.wFull, t.itemsCenter] : null,
        outline ? [t.border, t.bgTransparent, t.borderPrimary] : null,
      ]}>
      {title && (
        <Text
          style={[
            size === 'sm'
              ? [t.textSm, t.fontSans, t.textWhite]
              : size === 'md'
              ? [t.textBase, t.fontSansMedium, t.textWhite]
              : size === 'lg'
              ? [t.textLg, t.fontSansBold, t.textWhite]
              : null,
            outline ? [t.textPrimary] : null,
          ]}>
          {title}
        </Text>
      )}
      {icon && icon}
    </TouchableOpacity>
  );
};

export default Button;
