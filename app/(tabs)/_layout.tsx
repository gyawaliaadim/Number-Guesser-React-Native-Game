import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/Colors";
export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.gradient1,
            tabBarInactiveTintColor: Colors.secondary,
            tabBarStyle: {
              backgroundColor: Colors.secondaryDark,
              borderTopWidth: 0,
              elevation: 2,
            },

          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
             
              ),
            }}
            />
          <Tabs.Screen
            name="about"
            options={{
              tabBarLabel: "About",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle" color={color} size={size} />
              ),
            }}
            />
        </Tabs>
      </>
      )
}
