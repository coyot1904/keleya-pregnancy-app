import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

//Components
import KSubmit from '../../Components/KSubmit';
import KHeader from '../../Components/KHeader';

// Constatns
import {DateBG} from '../../Assets/Images';

//Styles
import {styles} from './styles';

function Pick(): JSX.Element {
  const [dateP, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [printDate, setPrintDate] = useState(String);

  useEffect(() => {
    const [year, month] = dateP.toISOString().substring(0, 10).split('-');
    let monthText = dateP.toLocaleString('en-US', {month: 'long'});

    let dateFormatted: string = `${monthText} ${month}, ${year}`;
    setPrintDate(dateFormatted);
  }, [dateP]);

  const navigation = useNavigation();

  const onSetDate = () => {
    navigation.navigate('Workout' as never);
  };

  return (
    <View style={styles.container}>
      <KHeader bg={DateBG} headerContainer={styles.headerContainer} />
      <View style={styles.btnContainer}>
        <Text style={styles.titleText}>When is your baby due, Sam?</Text>
        <View>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.dateBtn}>
            <Text style={styles.dateBtnText}>{String(printDate)}</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            mode="date"
            date={dateP}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <KSubmit
          onEvent={onSetDate}
          title={'Continue'}
          buttonStyle={styles.loginActiveBtnContainer}
          textStyle={styles.loginBtnText}
        />
      </View>
    </View>
  );
}

export default Pick;
