import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component{
  render(){
    return(
      <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarText}>MEMO</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default Appbar;