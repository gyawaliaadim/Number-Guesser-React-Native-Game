import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
export default function Layout() {
  return (

    <Stack
      screenOptions={{
        title: "Game Over",
        headerTransparent: true,
        headerTitleStyle: {
          color: Colors.primary,
          fontSize: 24,
          fontWeight: "bold",
        },
        headerTintColor: Colors.primary,

      }}
    />


  );
}