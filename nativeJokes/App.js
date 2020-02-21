/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { JokesContainer } from './components/JokesContainer'



const App: () => React$Node = () => {
  return (
    <>
      <ScrollView>
        <JokesContainer />
        <Text>Hello</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
