import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export type Props = {
  title: string;
  onEvent: () => void;
  buttonStyle: object;
  textStyle: object;
};

const KSubmit: React.FC<Props> = ({title, onEvent, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onEvent} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default KSubmit;
