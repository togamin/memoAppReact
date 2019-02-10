import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from '../components/memoList';
import AddBtn from '../components/AddBtn';

class MemoListScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <MemoList/>
        <AddBtn/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  },
});

export default MemoListScreen;