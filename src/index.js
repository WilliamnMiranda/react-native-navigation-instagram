import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react';
import Navigation from './components/navigation'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
