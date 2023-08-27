import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Components
import KSubmit from '../../Components/KSubmit';
import KTextInput from '../../Components/KTextInput';
import KHeader from '../../Components/KHeader';

// Constatns
import {NameBG} from '../../Assets/Images';

//Styles
import {styles} from './styles';

function Name(): JSX.Element {
  const [formState, setFormState] = useState({
    name: '',
  });
  const onChangeName = (value: any) => {
    setFormState({
      ...formState,
      name: value,
    });
  };
  const navigation = useNavigation();

  const setName = () => {
    if (formState.name.length >= 6) {
      navigation.navigate('Pick' as never);
    } else {
      Alert.alert('Error', 'Please write your name', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <KHeader bg={NameBG} headerContainer={styles.headerContainer} />
      <View style={styles.btnContainer}>
        <Text style={styles.titleText}>
          It's great that you are here! First things first what should we call
          you?
        </Text>
        <KTextInput
          value={formState.name as any}
          onChangeText={onChangeName as (text: string) => void}
          placeholder={'Your Name'}
          inputStyle={styles.input}
        />
        <KSubmit
          onEvent={setName}
          title={'Continue'}
          buttonStyle={
            formState.name.length >= 6
              ? styles.loginActiveBtnContainer
              : styles.loginBtnContainer
          }
          textStyle={styles.loginBtnText}
        />
      </View>
    </View>
  );
}

export default Name;
