import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../../components/Button';
import MainView from '../../components/MainView';
import Colors from '../../constants/Colors';

const GameScreen = () => {
  const [data, setData] = React.useState<GuessItem[]>([

    // Initial guess
  ]);
  const randomNum = Math.floor(1+Math.random() * 101);
  const [message, setMessage] = React.useState<string>('Computer has chosen a number (1-99)');
  const [randomNumber, setrandomNumber] = React.useState<string>(randomNum.toString());
  const router = useRouter();
  const [enteredNumber, setEnteredNumber] = React.useState<string>('');

  type GuessItem = {
    round: number;
    guess: number;
  };

  const renderItem = ({ item }: { item: GuessItem }) => (
    <View style={styles.row}>
      <View style={[{ flex: 1, borderRightWidth: 1, borderRightColor: Colors.tertiory, backgroundColor: Colors.secondaryDark, borderRadius: 10 }]}>
        <Text style={styles.cell}>{item.round}</Text>
      </View>
      <View style={[{ flex: 1, backgroundColor: Colors.secondaryDark, borderRadius: 10 }]}>
        <Text style={styles.cell}>{item.guess}</Text>
      </View>
    </View>
  );

  const handleConfirmPress = () => {

    const chosenNumber = parseInt(enteredNumber);
    console.log(randomNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Please enter a number between 1 and 99.',
        [{ text: 'OK', style: 'destructive', onPress: () => setEnteredNumber('') }],

      );
      return;
    }
    else {
      if (chosenNumber === parseInt(randomNumber)) {
        router.push({ pathname: "/GameOver", params: { rounds: (data.length+1).toString(), randomNumber: randomNumber } });
      } 
      else if (chosenNumber < parseInt(randomNumber)) {
        setMessage("Your guess is low")
      }
      else if (chosenNumber > parseInt(randomNumber)) {
        setMessage("Your guess is high")
      }
      setEnteredNumber('');
      setData((prevData) => [
        ...prevData,
        { round: prevData.length + 1, guess: chosenNumber }
      ]);
    };
    if (data.length >= 10) {
      Alert.alert(
        'Game Over',
        'You have reached the maximum number of guesses.',
        [
          {
        text: 'Play Again',
        style: 'default',
        onPress: () => {
          setData([]);
          setEnteredNumber('');
          setMessage('Computer has chosen a number (1-99)');
          const newRandomNum = Math.floor(Math.random() * 101);
          setrandomNumber(newRandomNum.toString());
        }
          },
          {
        text: 'Back',
        style: 'destructive',
        onPress: () => router.push('/'),
          }
        ],
      );
    }
  };

  return (
    <MainView>
      {/* <ScrollView> */}
        <View style={styles.mainContainer}>
          <Text style={styles.title}>{message}</Text>
          <LinearGradient
            // Background Linear Gradient
            colors={[Colors.gradient1, Colors.gradient2]}
            style={styles.container}
          >
            <Text style={styles.label}>Enter a your guess: </Text>

            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              value={enteredNumber}
              onChangeText={(text) => setEnteredNumber(text)}
            />
            <Button
              handleLinkPress={handleConfirmPress}
              text="Confirm"
            />
          </LinearGradient>
        </View>
        {data.length > 0 &&
          <View style={styles.tableContainer}>
            {/* Header */}
            <View
              style={[styles.row, styles.header]}>
              <Text style={[styles.headCell, styles.headerText, { borderRightWidth: 1, borderRightColor: Colors.tertiory }]}>No. of Rounds</Text>
              <Text style={[styles.headCell, styles.headerText]}>Your Guess</Text>
            </View>

            {/* Table Rows */}

            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.round.toString()}
       
            />
          </View>}
      {/* </ScrollView> */}
    </MainView>
  );
};

export default GameScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gradient1,
    width: 'auto',
    padding: 40,
    minWidth: 300,
    maxHeight: 250,
    borderRadius: 50,
    alignSelf: 'center',
    // margin: "auto",
    gap: 20,
  },
  input: {
    color: Colors.primary,
    fontSize: 18,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    width: 50,
    textAlign: 'center',
  },
  title: {
    color: Colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainContainer: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.tertiory,

  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: Colors.primary,
    backgroundColor: Colors.secondaryDark,
  },
  headCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  header: {
    backgroundColor: Colors.tertiory,
  },
  headerText: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  tableContainer: {
    margin: 20,
    borderWidth: 2,
    borderColor: Colors.tertiory,
    borderRadius: 10,
    padding: 10,
    minWidth: 300,
    maxWidth: 400,
    marginHorizontal: 'auto',
    maxHeight: "50%"
  }
})