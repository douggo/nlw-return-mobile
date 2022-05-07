import 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import Widget from './src/components/Widget';

interface Props {
  children: JSX.Element;
}

const DismissKeyboard = ({ children }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {Keyboard.dismiss()}}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <DismissKeyboard>
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}>
        <StatusBar 
          style="light"
          backgroundColor='transparent'
          translucent 
        />
        <Widget />
      </View>
    </DismissKeyboard>
  );
}
