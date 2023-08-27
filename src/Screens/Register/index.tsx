import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Components
import KSubmit from '../../Components/KSubmit';
import KTextInput from '../../Components/KTextInput';
import KHeader from '../../Components/KHeader';
import KCheckBox from '../../Components/KCheckBox';

// Constatns
import {LoginBG, Show, Hide} from '../../Assets/Images';
import {validateEmail} from '../../Assets/Constants/ValidateEmail';

//Styles
import {styles} from './styles';

function Register(): JSX.Element {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    showPassword: true,
    privacy: false,
    term: false,
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

  const onChangePrivacy = () => {
    setFormState({
      ...formState,
      privacy: !formState.privacy,
    });
  };

  const onChangeTerm = () => {
    setFormState({
      ...formState,
      term: !formState.term,
    });
  };

  const navigation = useNavigation();

  const register = () => {
    if (
      validateEmail(formState.email) !== null &&
      formState.password.length >= 6 &&
      formState.privacy === true &&
      formState.term === true
    ) {
      navigation.navigate('Name' as never);
    } else {
      Alert.alert('Error', 'All fields are required ! Please check again!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <KHeader bg={LoginBG} />
      <View style={styles.btnContainer}>
        <Text style={styles.titleText}>
          Add your details below to set up an account
        </Text>
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
        <KCheckBox
          text={"I've read the privacy policy"}
          isSelected={formState.privacy as any}
          setSelection={onChangePrivacy}
        />
        <KCheckBox
          text={"I accept the terms & conidations and Keleya's advice"}
          isSelected={formState.term as any}
          setSelection={onChangeTerm}
        />
        <KSubmit
          onEvent={register}
          title={'Create account'}
          buttonStyle={
            validateEmail(formState.email) !== null &&
            formState.password.length >= 6 &&
            formState.privacy === true &&
            formState.term === true
              ? styles.loginActiveBtnContainer
              : styles.loginBtnContainer
          }
          textStyle={styles.loginBtnText}
        />
      </View>
    </View>
  );
}

export default Register;
