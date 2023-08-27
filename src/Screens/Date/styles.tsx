import {StyleSheet} from 'react-native';
import Metrics from '../../Assets/Constants/Metrics';
import colors from '../../Assets/Constants/Colors';

export const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    height: Metrics.measure(340),
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  backIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
    marginTop: Metrics.measure(30),
    marginLeft: Metrics.measure(15),
  },
  btnContainer: {
    position: 'absolute',
    bottom: Metrics.measure(15),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: Metrics.measure(22),
    textAlign: 'center',
    color: colors.GREYISH_BROWN,
    marginBottom: Metrics.measure(20),
    marginLeft: Metrics.measure(15),
    marginRight: Metrics.measure(15),
    lineHeight: Metrics.measure(25),
  },
  loginBtnContainer: {
    width: Metrics.measure(300),
    backgroundColor: colors.WARM_GREY,
    height: Metrics.measure(45),
    borderRadius: Metrics.measure(5),
    justifyContent: 'center',
    marginTop: Metrics.measure(145),
    alignItems: 'center',
  },
  loginBtnText: {
    fontSize: Metrics.measure(20),
    color: colors.WHITE,
  },
  loginActiveBtnContainer: {
    width: Metrics.measure(300),
    backgroundColor: colors.PALE_TEAL,
    height: Metrics.measure(45),
    borderRadius: Metrics.measure(5),
    justifyContent: 'center',
    marginTop: Metrics.measure(105),
    alignItems: 'center',
  },
  dateBtn: {
    backgroundColor: colors.WARM_GREY,
    padding: Metrics.measure(10),
    borderRadius: Metrics.measure(5),
  },
  dateBtnText: {
    color: colors.WHITE,
  },
  headerContainer: {
    width: '100%',
    height: Metrics.measure(440),
  },
});
