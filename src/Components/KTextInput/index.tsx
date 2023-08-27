import React from 'react';
import {TextInput as RNTextInput} from 'react-native';

// Styles
import {styles} from './styles';
import colors from '../../Assets/Constants/Colors';

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  inputStyle?: object;
}

const KTextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  inputStyle,
}) => {
  return (
    <RNTextInput
      style={inputStyle ? inputStyle : styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={colors.GREYISH_BROWN}
    />
  );
};

export default KTextInput;
