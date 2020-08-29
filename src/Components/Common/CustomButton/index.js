import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import * as Animatable from 'react-native-animatable';
import Typography from '../../../Constants/Typography';

const getVariantColors = {
  contained: {
    root: {
      backgroundColor: '#000000',
    },
    title: {
      color: '#fff',
    },
  },
  outlined: {
    root: {
      borderColor: '#000000',
      borderWidth: 1,
    },
    title: {
      color: '#000000',
    },
  },
  naked: {
    root: {},
    title: {
      color: '#000000',
    },
  },
};

const CustomButton = ({
  onPress,
  title,
  variant = 'contained',
  rootStyles = {},
  ...props
}) => {
  return (
    <TouchableOpacity
      // activeOpacity={0.5}
      onPress={onPress}
      style={{
        minHeight: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        ...getVariantColors[variant].root,
        ...rootStyles,
      }}
      {...props}>
      {props.children ? (
        props.children
      ) : (
        <Text style={[Typography.button, getVariantColors[variant].title]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
