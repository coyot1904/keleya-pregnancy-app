import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';

// Styles
import {styles} from './styles';
import colors from '../../Assets/Constants/Colors';

interface CheckBoxProps {
  isSelected: boolean;
  setSelection: (text: string) => void;
  text?: string;
}

const KCheckBox: React.FC<CheckBoxProps> = ({
  isSelected,
  setSelection,
  text,
}) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        style={styles.checkbox}
        onClick={() => {
          setSelection();
        }}
        isChecked={isSelected}
        uncheckedCheckBoxColor={colors.LIGHT_TEAL}
        checkedCheckBoxColor={colors.WARM_GREY}
      />
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

export default KCheckBox;
