import CustonButton from "@/components/Button";
import { useRouter } from "expo-router";
import {
  BackHandler,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MainView from "../../components/MainView";
import Colors from "../../constants/Colors";


export default function Index() {
  const router = useRouter();
  const handleQuit = () => {
    BackHandler.exitApp();
  };
  const handleGameStart = () => {
      
    router.push("/GameScreen");
  }
  return (

    <MainView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logoContainer}
        />
        <Text style={styles.text}>Welcome to the App!</Text>
        <View style={styles.buttonContainer}>
          <CustonButton
            handleLinkPress={handleGameStart}
            text="Start Game"
          />
          <CustonButton
            handleLinkPress={handleQuit}
            text="Quit"
          />
        </View>
      </View>
    </MainView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: Colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    
  },
  logoContainer: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
});