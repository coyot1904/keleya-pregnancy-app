import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Components
import KSubmit from '../../Components/KSubmit';
import KTextInput from '../../Components/KTextInput';
import KHeader from '../../Components/KHeader';

// Constatns
import {LoginBG, Show, Hide} from '../../Assets/Images';
import {validateEmail} from '../../Assets/Constants/ValidateEmail';

//Styles
import {styles} from './styles';

function Login(): JSX.Element {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    showPassword: true,
  });
  const onChangeMail = (value: any) => {
    setFormState({
      ...formState,
      email: value,
    });
  };

  const onChangePassword = (value: string) => {
    setFormState({
      ...formState,
      password: value,
    });
  };

  const onChangePasswordVisibility = () => {
    setFormState({
      ...formState,
      showPassword: !formState.showPassword,
    });
  };

  const navigation = useNavigation();

  const login = () => {
    if (
      validateEmail(formState.email) !== null &&
      formState.password.length >= 6
    ) {
      navigation.navigate('Auth' as never);
    } else {
      Alert.alert('Error', 'Please check you password or email', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  const forgetPassword = () => {};

  return (
    <View style={styles.container}>
      <KHeader bg={LoginBG} />
      <View style={styles.btnContainer}>
        <Text style={styles.titleText}>Welcome back!</Text>
        <KTextInput
          value={formState.email as any}
          onChangeText={onChangeMail as (text: string) => void}
          placeholder={'example@gmail.com'}
        />
        <View>
          <KTextInput
            value={formState.password as string}
            onChangeText={onChangePassword as (text: string) => void}
            placeholder={'Enter a password'}
            secureTextEntry={formState.showPassword === true ? true : false}
          />
          <TouchableOpacity
            onPress={() => onChangePasswordVisibility()}
            style={styles.passwordVisibleContainer}>
            <Image
              source={formState.showPassword === true ? Show : Hide}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <KSubmit
          onEvent={forgetPassword}
          title={'Have you forgotten your password?'}
          buttonStyle={styles.forgetContainer}
          textStyle={styles.forgetBtnText}
        />
        <KSubmit
          onEvent={login}
          title={'Log in'}
          buttonStyle={
            validateEmail(formState.email) !== null &&
            formState.password.length >= 6
              ? styles.loginActiveBtnContainer
              : styles.loginBtnContainer
          }
          textStyle={styles.loginBtnText}
        />
      </View>
    </View>
  );
}

export default Login;
