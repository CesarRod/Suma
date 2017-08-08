/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';


export class Suma extends Component{

  render(){
    let a= parseInt(this.props.numero1)
    let b= parseInt(this.props.numero2)
    let c=a+b
    return(
        //console.log('ASD');
      <View style={{padding:75}}>


      <Text style={{width:15, margin:45}}>{c}</Text>
      </View>
    );

  }

}
export default class textoApp extends Component {
  constructor(props){
    super(props)

    this.state={
      numero1:"0",
      numero2:"0"
    }
  }
  render() {

    return (
    <View style={{paddingTop:35}}>
        <TextInput
          style={{height:75,width:75, paddingTop:25}}

          keyboardType='numeric'
          maxLenght='5'
          onChange = {(text)=> this.setState({numero1: text})}
          value={this.state.text}
          />

		    <Text style={{paddingLeft:25}}>+</Text>

        <TextInput
    			style={{height:75,width:75, paddingTop:25}}

    			keyboardType='numeric'
    			maxLenght='5'
    			onChange = {(text)=> this.setState({numero2: text})}
    			value={this.state.text}
    			/>

          <Suma numero1={this.state.numero1} numero2={this.state.numero2}/>
	   </View>
    );
  }
}




AppRegistry.registerComponent('project', () => textoApp);
