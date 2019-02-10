import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddBtn from '../components/AddBtn';

class MemoDetailScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.MemoHeader}>
          <View>
            <Text style={styles.MemoHeaderTitle}>メモアイテム</Text>
            <Text style={styles.MemoHeaderDate}>2019/02/02</Text>
          </View>
        </View>
        <View style={styles.MemoContents}>
          <Text>何をメモしようか迷います。</Text>
        </View>
        <AddBtn color = 'white' style={styles.editBtn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
  },
  MemoHeader:{
    height:100,
    backgroundColor:'#777799',
    justifyContent:'center',
    padding:10,
  },
  MemoHeaderTitle:{
    fontSize:27,
    fontWeight:'bold',
    color:'#fff',
  },
  MemoHeaderDate:{
    fontSize:12,
    color:'#fff',
  },
  MemoContents:{
    paddingTop:30,
    paddingLeft:20,
    paddingRight:20,
    paddingButtom:20,
    backgroundColor:'#fff',
    flex:1,
  },
  editBtn:{
    top:75,
  },
});

export default MemoDetailScreen;