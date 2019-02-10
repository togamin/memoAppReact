import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/components/memoList';

export default class App extends React.Component {
  render() {
    return (
      //コンテナ
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarText}>MEMO</Text>
          </View>
        </View>

        <MemoList />

        <View style={styles.memoAddBtn}>
          <Text style={styles.memoAddBtnTitle}>＋</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:78,
    flex: 1,
    backgroundColor: '#ffffd6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memoAddBtn:{
    backgroundColor:'#ff9999',
    position:'absolute',
    bottom:27,
    right:27,
    width:54,
    height:54,
    borderRadius:'50%',
    justifyContent:'center',
    alignItems:'center',

    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:3,
    zIndex:10,
  },
  memoAddBtnTitle:{
    fontSize:27,
    color:'#fff',
  },
  appbar:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    paddingTop:30,
    height:78,
    backgroundColor:'#33f',
    justifyContent:'center',
    alignItems:'center',

    shadowColor:'#000',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.9,
    shadowRadius:3,
    zIndex:10,
  },
  appbarText:{
    fontSize:20,
    color:'#fff',
  },
});