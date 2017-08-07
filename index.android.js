import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';

export default class suma extends Component{
  constructor(){
    super()
    //Declaramos los "estados" que vamos a usar
    this.state ={
      n1: '',//n1 es el numero que se va a tomar del primer "TextBox"
      n2:'',//n2 es el numero que se va a tomar del primer "TextBox"

    }
  }
  //Este es un "Setter" para el n1
  cambioNumero1(n1){
    this.setState({n1})

  }
  //"Setter" para el n2
  cambioNumero2(n2){
    this.setState({n2})
  }
  //Funcion que realiza la suma entre los dos numeros
  suma(){

      let a=parseFloat(this.state.n1)//declaracion de variable a que contiene el valor floatante de n1
      let b=parseFloat(this.state.n2)//declaracion de variable a que contiene el valor floatante de n1
      let c=a+b
      if(!isNaN(c)){ //si lo que estuvo en el TextBox no fue un NaN (Not a Number)
        Alert.alert(c.toString())
      }else{Alert.alert("Error") }
  }
  //Funcion que cambia el foco de TextBox1 a TextBox2
  cambioFoco(){
    this.refs.num2.focus()
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.box}//Estilo
          keyboardType='numeric'//Tipo de teclado
          returnKeyType={'next'}//Tipo de tecla return
          onSubmitEditing={(event)=> this.cambioFoco()}//Cuando presione return cambia el foco
          placeholder="Numero 1"
          value={this.state.n1}// El valor sera el del state n1
          onChangeText={(numero1)=> this.cambioNumero1(numero1)}// Esto es para "setear" el valor a n1
        />
        <Text style={styles.mas}> + </Text>
        <TextInput
          style={styles.box}
          ref='num2'//referencia
          keyboardType='numeric'
          returnKeyType={'done'}
          placeholder="Numero 2"
          value={this.state.n2}
          onChangeText={(numero2)=> this.cambioNumero2(numero2)}
        />

        <Button onPress={()=>this.suma()} title='Resultado' />
        {/*Cuando se presione el boton llama a la funcion suma*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    paddingLeft:20,
    paddingRight:20,

  },
  box:{
    height:40,
    borderColor:'black',
    borderWidth:2,
    marginBottom:20,
    width:'33%',
    alignSelf: 'center'
  },
  mas:{
    fontSize:25,
    alignSelf: 'center',
    marginBottom:20
  }
});

AppRegistry.registerComponent('project',()=> suma);
