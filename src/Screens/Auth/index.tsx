import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Components
import KSubmit from '../../Components/KSubmit';
import KStep from '../../Components/KStep';

// Constatns
import {AuthBG, Logo} from '../../Assets/Images';

//Styles
import {styles} from './styles';

function Auth(): JSX.Element {
  const navigation = useNavigation();

  const getStart = () => {
    navigation.navigate('Register' as never);
  };

  const login = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <>
      <ImageBackground
        style={styles.headerContainer}
        source={AuthBG}
        resizeMode="cover">
        <View style={styles.logoContainer}>
          <Image source={Logo} resizeMode="contain" style={styles.logo} />
          <Text style={styles.logoText}>For a fit and relaxed pregnancy</Text>
        </View>
      </ImageBackground>
      <View style={styles.btnContainer}>
        <KSubmit
          onEvent={getStart}
          title={'Get Started'}
          buttonStyle={styles.getStartBtnContainer}
          textStyle={styles.getStartBtnText}
        />
        <KSubmit
          onEvent={login}
          title={'Or login'}
          buttonStyle={styles.loginContainer}
          textStyle={styles.loginText}
        />
        <KStep stepCount={3} activeStep={1} />
      </View>
    </>
  );
}

export default Auth;
