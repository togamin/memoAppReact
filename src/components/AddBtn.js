import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AddBtn extends React.Component{
  render(){
    const {style,color} = this.props;

    let bgColor = '#ff9999';
    let textColor = '#fff';

    if (color === 'white'){
      bgColor = '#fff';
      textColor = '#ff9999';
    }

    return(
      <View style={[styles.memoAddBtn,style,{backgroundColor:bgColor}]}>
        <Text style={[styles.memoAddBtnTitle,{color:textColor}]}>＋</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default AddBtn;