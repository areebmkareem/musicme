import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import CustomTextFiled from '../../Common/CustomTextFiled';
import CustomButton from '../../Common/CustomButton';
import Screens from '../../../Constants/Screens';
import {signInWithEmailAndPassword} from '../../../Store/Actions/Auth';
import {handleModal} from '../../../Store/Actions/Global';
import CustomLoader from '../../Common/CustomLoader';

const Login = (props) => {
  const dispatch = useDispatch();

  const {register, setValue, trigger, getValues, errors} = useForm({
    mode: 'onChange',
  });

  React.useEffect(() => {
    register('email', {required: true});
    register('password', {required: true});
  }, [register]);
  const handleOnLogin = async () => {
    const isValidated = await trigger();
    if (isValidated) {
      dispatch(handleModal({isVisible: true, component: <CustomLoader title="Logging in.." />}));
      const values = getValues();
      await dispatch(signInWithEmailAndPassword(values));
      dispatch(handleModal({isVisible: false, component: <React.Fragment />}));
    }
  };

  const styles = getGeneratedStyles(props);
  return (
    <SafeAreaView style={styles.contianer}>
      {/* <View
        style={{
          flex: 0.3,
        }}>
        <Image resizeMode="center" style={{width: 250, height: 250}} source={require('../../../Images/musicMe.png')} />
      </View> */}

      <Animatable.View
        useNativeDriver={true}
        animation="fadeInUp"
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          justifyContent: 'center',
        }}>
        <CustomTextFiled
          label="Email"
          error={errors.email}
          textInputs={{
            keyboardType: 'email-address',
          }}
          onChangeText={(value) => setValue('email', value)}
        />
        <CustomTextFiled
          label="Password"
          error={errors.password}
          rootStyles={{
            marginVertical: 30,
          }}
          textInputs={{
            secureTextEntry: true,
          }}
          onChangeText={(value) => setValue('password', value)}
        />

        <CustomButton title="LOGIN" onPress={handleOnLogin} />

        <CustomButton
          rootStyles={{
            marginVertical: 30,
          }}
          variant="naked"
          title="SIGN UP"
          onPress={() => props.navigation.navigate(Screens.SignupScreen)}
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

export default Login;
