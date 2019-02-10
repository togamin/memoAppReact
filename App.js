import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import MemoListScreen from './src/screens/MemoListScreen';
import Appbar from './src/components/Appbar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';



export default class App extends React.Component {
  render() {
    return (
      //コンテナ
      <View style={styles.container}>
        <Appbar/>
        {/* <MemoListScreen /> */}
        <MemoDetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:78,
    flex: 1,
    backgroundColor: '#ddddff',
    alignItems: 'center',
  },
});