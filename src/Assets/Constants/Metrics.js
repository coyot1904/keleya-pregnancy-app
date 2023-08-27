import {Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');
const statusbarHeight = StatusBar.currentHeight;
const designWidth = 360;

const measure = designSize => designSize * (width / designWidth);
const measureInverse = actualSize => actualSize * (designWidth / width);

export default {
  measure,
  measureInverse,
  width,
  height,
  statusbarHeight,
  marginHorizontal: measure(15),
  headerHeight: measure(50),
  tabHeight: measure(60),
  isScreenRatioSmall: height / width < 1.75,
  elevation: e => measure(Platform.Version >= 28 ? e : e / 3),
  headerMarginTop: Platform.OS === 'ios' ? 0 : statusbarHeight,
};
