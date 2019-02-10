import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component{
  render(){
    return(
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style = {styles.memoTitle}>アイテムタイトル</Text>
          <Text style = {styles.memoDate}>2019/02/02</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style = {styles.memoTitle}>アイテムタイトル</Text>
          <Text style = {styles.memoDate}>2019/02/02</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style = {styles.memoTitle}>アイテムタイトル</Text>
          <Text style = {styles.memoDate}>2019/02/02</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style = {styles.memoTitle}>アイテムタイトル</Text>
          <Text style = {styles.memoDate}>2019/02/02</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style = {styles.memoTitle}>アイテムタイトル</Text>
          <Text style = {styles.memoDate}>2019/02/02</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList:{
    width:'100%',
    flex:1,
    backgroundColor:'#fff'
  },
  memoListItem:{
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    padding:18,
  },
  memoTitle:{
    fontSize:21,
    marginBottom:3,
  }
});

export default MemoList;