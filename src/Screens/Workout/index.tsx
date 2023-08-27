import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

//Components
import KSubmit from '../../Components/KSubmit';
import KHeader from '../../Components/KHeader';

// Constatns
import {WorkoutBG} from '../../Assets/Images';

//Styles
import {styles} from './styles';

function Workout(): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState('4');

  const navigation = useNavigation();

  const setWorkout = () => {
    navigation.navigate('Success' as never);
  };

  return (
    <View style={styles.container}>
      <KHeader bg={WorkoutBG} headerContainer={styles.headerContainer} />
      <View style={styles.btnContainer}>
        <Text style={styles.titleText}>
          How many times a week do you want to be active?
        </Text>
        <View>
          <Picker
            style={styles.pickerContainer}
            selectedValue={selectedLanguage}
            onValueChange={itemValue => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Once a week" value="1" />
            <Picker.Item label="1 times a week" value="2" />
            <Picker.Item label="2 times a week" value="3" />
            <Picker.Item label="3 times a week" value="4" />
            <Picker.Item label="4 times a week" value="5" />
            <Picker.Item label="5 times a week" value="6" />
          </Picker>
        </View>
        <KSubmit
          onEvent={setWorkout}
          title={'Continue'}
          buttonStyle={styles.loginActiveBtnContainer}
          textStyle={styles.loginBtnText}
        />
      </View>
    </View>
  );
}

export default Workout;
