import Rotas from './src/rotas';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

async function SplashScreenHide() {
  await SplashScreen.hideAsync();
}

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreenHide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Rotas />
  );
}
