import {StyleSheet} from 'react-native';
import Metrics from '../../Assets/Constants/Metrics';
import colors from '../../Assets/Constants/Colors';

export const styles = StyleSheet.create({
  input: {
    width: Metrics.measure(300),
    height: Metrics.measure(40),
    borderColor: 'gray',
    borderBottomWidth: Metrics.measure(1),
    padding: Metrics.measure(10),
    marginBottom: Metrics.measure(10),
    color: colors.GREYISH_BROWN,
    fontSize: Metrics.measure(14),
  },
});
