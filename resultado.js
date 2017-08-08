import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
}from 'react-native';
export default class Resultado extends Component{
  render(){
    let a=parseFloat(this.props.n1)||0//pasa a flotante el numero que recibe como parametro,
    let b=parseFloat(this.props.n2)||0//Si no es un numero sera un 0
    let c=a+b;
    return(
      <View style={styles.container}>
        <Text style={styles.mas}>
          {c}
        </Text>
      </View>

    );

  }

}
const styles = StyleSheet.create({
  container:{
    marginTop:10,
    paddingLeft:20,
    paddingRight:20,
    width:Dimensions.get('window').width,//Obtiene las Dimensiones de la pantalla
    height:Dimensions.get('window').height
  },

  mas:{
    fontSize:25,
    alignSelf: 'center',
    marginBottom:20
  }
});
