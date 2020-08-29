import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const generateFontSizeAndFamily = (size) => ({
  fontSize: RFValue(size, SCREEN_HEIGHT),
});

export default Typography = {
  h1: generateFontSizeAndFamily(96),
  h2: generateFontSizeAndFamily(60),
  h3: generateFontSizeAndFamily(48),
  h4: generateFontSizeAndFamily(34),
  h5: generateFontSizeAndFamily(24),
  h6: generateFontSizeAndFamily(20),
  body1: generateFontSizeAndFamily(16),
  body2: generateFontSizeAndFamily(14),
  caption: generateFontSizeAndFamily(12),
  button: {
    ...generateFontSizeAndFamily(16),
    fontWeight: 'bold',
  },
};
