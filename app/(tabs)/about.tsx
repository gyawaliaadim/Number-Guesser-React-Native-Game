import Button from '@/components/Button';
import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import MainView from '../../components/MainView';
import Colors from '../../constants/Colors';
const About = () => {
  const handleLinkPress = () => {
    Linking.openURL('https://linktr.ee/aadimgy'); // Replace with your actual Linktree link
  };

  return (
    <MainView>
      <View style={styles.container}>
        <Text style={styles.title}>About This Project</Text>
        <Text style={styles.description}>
          This is one of my projects built using React Native. I&apos;m constantly learning and exploring new stuff in mobile development.
        </Text>
        <Text style={styles.description}>
          If you’d like to connect or collaborate, hit me up on social media through the link below.
        </Text>
        <Button handleLinkPress={handleLinkPress} text="Contact Me!" />
      </View>
    </MainView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 36,
    color: Colors.primary,
    fontWeight: '900',
    marginBottom: 12,
    textAlign: 'center',
    
  },
  description: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 10,
    lineHeight: 22,
    textAlign: 'center',

  },

});
