import {StyleSheet} from 'react-native';
import Metrics from '../../Assets/Constants/Metrics';

export const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    height: Metrics.measure(340),
  },
  backIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
    marginTop: Metrics.measure(30),
    marginLeft: Metrics.measure(15),
  },
});
