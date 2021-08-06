import {Colors, Typography, Spacings, ThemeManager} from 'react-native-ui-lib';

const FoundationConfig = () => {

Colors.loadColors({
  primaryColor: '#029BDB',
  secondaryColor: '#F2F2F2',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C'
});

Typography.loadTypographies({
  heading: {fontSize: 30, fontWeight: '600'},
  subheading: {fontSize: 25, fontWeight: '400'},
  body: {fontSize: 16, fontWeight: '400'},
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16
});

// with plain object
ThemeManager.setComponentTheme('Card', {
    borderRadius: 8
  });
  
  // with a dynamic function
  ThemeManager.setComponentTheme('Button', (props, context) => {
    // 'square' is not an original Button prop, but a custom prop that can
    // be used to create different variations of buttons in your app
    if (props.square) {
      return {
        borderRadius: 0
      };
    }
  });

  ThemeManager.setComponentTheme('Text', (props, context) => {
    // 'square' is not an original Button prop, but a custom prop that can
    // be used to create different variations of buttons in your app

    fontFamily: 'Poppins-Regular'
   return {
       h1 : true,
       
       
   }
  });

}

export default FoundationConfig