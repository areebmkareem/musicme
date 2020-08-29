import React from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import CustomButton from '../Common/CustomButton';
import {PERMISSIONS, check, request, RESULTS, openSettings} from 'react-native-permissions';
const Home = ({navigation}) => {
  const handleOnClick = () => {
    handlePermission();
  };

  const handlePermission = () => {
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(onPermissionResults);
  };

  const onPermissionResults = (result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        break;
      case RESULTS.DENIED:
        request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(onPermissionResults);
        break;
      case RESULTS.GRANTED:
        navigation.navigate('Activity');
        break;
      case RESULTS.BLOCKED:
        openSettings().catch(() => console.warn('cannot open settings'));
        break;
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <Animatable.View animation="fadeInDown" style={{alignItems: 'center'}}>
        <Text>
          <Text style={{fontSize: 36}}>help</Text>
          <Text style={{fontWeight: 'bold', fontSize: 36 * 2}}>me.</Text>
        </Text>
        <Text
          style={{
            textAlign: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          Contribute metadata of all the sound files in your local and sd card.
        </Text>
      </Animatable.View>
      <CustomButton title="CONTINUE" onPress={handleOnClick} />
    </View>
  );
};

export default Home;
