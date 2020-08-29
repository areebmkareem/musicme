import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Typography from '../../../Constants/Typography';

const CustomLoader = ({title = 'Loading..'}) => {
  return (
    <View style={{backgroundColor: '#fff', minHeight: 80, flexDirection: 'row', alignItems: 'center', padding: 10, overflow: 'hidden'}}>
      <ActivityIndicator color="#000000" size="large" />
      <Text style={[Typography.body1, {marginLeft: 15}]}>{title}</Text>
    </View>
  );
};

export default CustomLoader;
