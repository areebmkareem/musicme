import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import * as Animatable from 'react-native-animatable';
import Typography from '../../../Constants/Typography';

const getErrorStyles = (isError) => {
  if (isError)
    return {
      borderWidth: 1,
      borderColor: '#696969',
    };
  else return {};
};

const CustomTextFiled = ({onChangeText, error, label = 'Hello', textInputs = {}, rootStyles = {}}) => {
  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: '#fff',
        minHeight: 60,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        elevation: 1,
        ...getErrorStyles(error),
        ...rootStyles,
      }}>
      <Text style={[Typography.caption]}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={{
          padding: 0,
          flex: 1,
          paddingVertical: 2,
        }}
        {...textInputs}
      />
    </View>
  );
};

export default CustomTextFiled;
