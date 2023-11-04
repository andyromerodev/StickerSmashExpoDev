import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Changing color to text with prop style*/}
      <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Changing color to background
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
