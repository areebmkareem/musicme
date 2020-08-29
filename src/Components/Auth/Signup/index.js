import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import CustomTextFiled from '../../Common/CustomTextFiled';
import CustomButton from '../../Common/CustomButton';
import {createUserWithEmailAndPassword} from '../../../Store/Actions/Auth';
import {handleModal} from '../../../Store/Actions/Global';
import CustomLoader from '../../Common/CustomLoader';

const Signup = (props) => {
  const {register, setValue, trigger, getValues, errors} = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    register('name', {required: true});
    register('email', {required: true});
    register('password', {required: true});
  }, [register]);
  const handleOnLogin = async () => {
    const isValidated = await trigger();
    if (isValidated) {
      dispatch(handleModal({isVisible: true, component: <CustomLoader title="Creating Account.." />}));
      const values = getValues();
      await dispatch(createUserWithEmailAndPassword(values));
      dispatch(handleModal({isVisible: false, component: <React.Fragment />}));
    }
  };

  const styles = getGeneratedStyles(props);
  return (
    <SafeAreaView style={styles.contianer}>
      {/* <View
        style={{
          flex: 0.3,
          position: 'relative',
        }}>
        <Image resizeMode="center" style={{width: 250, height: 250, top: 0, position: 'absolute'}} source={require('../../../Images/musicMe.png')} />
      </View> */}

      <Animatable.View
        useNativeDriver={true}
        animation="fadeInUp"
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          justifyContent: 'center',
        }}>
        <CustomTextFiled label="Full Name" error={errors.name} onChangeText={(value) => setValue('name', value)} />
        <CustomTextFiled
          label="Email"
          error={errors.email}
          textInputs={{
            keyboardType: 'email-address',
          }}
          rootStyles={{
            marginVertical: 30,
          }}
          onChangeText={(value) => setValue('email', value)}
        />
        <CustomTextFiled
          label="Password"
          error={errors.password}
          rootStyles={{
            marginBottom: 30,
          }}
          textInputs={{
            secureTextEntry: true,
          }}
          onChangeText={(value) => setValue('password', value)}
        />

        <CustomButton title="SIGN UP" onPress={handleOnLogin} />

        <CustomButton
          rootStyles={{
            marginVertical: 30,
          }}
          variant="naked"
          title="LOGIN"
          onPress={() => props.navigation.goBack()}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

const getGeneratedStyles = () =>
  StyleSheet.create({
    contianer: {
      flex: 1,
      margin: 10,
    },
  });

export default Signup;
