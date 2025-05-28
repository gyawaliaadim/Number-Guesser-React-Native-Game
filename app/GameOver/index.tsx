
import Button from '@/components/Button';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MainView from '../../components/MainView';
import Colors from '../../constants/Colors';
const GameOver = () => {
  const router = useRouter();
  const { rounds, randomNumber } = useLocalSearchParams();
  if (!rounds || !randomNumber) {
    router.push('/');
  }
  return (
    <MainView>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>You Won!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/accomplishment.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.description}>It took you {rounds} to guess {randomNumber}.</Text>
        <View style={styles.buttonContainer}>
          <Button
            text="Play Again"
            handleLinkPress={() => router.push('/GameScreen')}
          />
          <Button
            text="About Me"
            handleLinkPress={() => router.push('/about')}
            
          />
          </View>

      </View>
    
    </MainView>
  )

};

export default GameOver

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    gap:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 20,
     color: Colors.primary,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 200,
    height: 200,
    tintColor: Colors.primary 
  },
  imageContainer:{
    width:300,
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "50%",
        borderColor: Colors.secondaryDark,
    borderWidth: 5,

  },
  description:{
    fontSize: 20,
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 20,
  }
})