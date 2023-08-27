import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';

//Components
import KSubmit from '../../Components/KSubmit';

// Constatns
import {SucessBG, Bell} from '../../Assets/Images';

//Styles
import {styles} from './styles';

function Success(): JSX.Element {
  const activeNotification = () => {};

  const skipForNow = () => {};

  return (
    <ImageBackground
      style={styles.container}
      source={SucessBG}
      resizeMode="cover">
      <Image source={Bell} resizeMode="contain" style={styles.bellIcon} />
      <Text style={styles.titleText}>
        Get notifications to boost your multivation
      </Text>
      <View style={styles.btnContainer}>
        <KSubmit
          onEvent={skipForNow}
          title={'Skip'}
          buttonStyle={styles.skipContainer}
          textStyle={styles.skipText}
        />
        <KSubmit
          onEvent={activeNotification}
          title={'Allow notifications'}
          buttonStyle={styles.loginActiveBtnContainer}
          textStyle={styles.loginBtnText}
        />
      </View>
    </ImageBackground>
  );
}

export default Success;
