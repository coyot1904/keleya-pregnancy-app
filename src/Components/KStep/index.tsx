import React from 'react';
import {View} from 'react-native';

export type Props = {
  stepCount: number;
  activeStep: number;
};

// Styles
import {styles} from './styles';

const renderStep = (count: number, active: number) => {
  let ret = [];
  for (let i = 0; i < count; i++) {
    ret.push(
      <View key={i} style={active >= i + 1 ? styles.active : styles.normal} />,
    );
  }
  return ret;
};

export const KStep: React.FC<Props> = ({stepCount, activeStep}) => {
  return (
    <View style={styles.stepContainer}>
      {renderStep(stepCount, activeStep)}
    </View>
  );
};

export default KStep;
