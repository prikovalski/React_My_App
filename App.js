import React , { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      this.setState({nome: ''});
      alert('Digite seu nome!');
      return;
    }
      this.setState({nome: 'Bem Vindo ' + this.state.input + '!'});
  }

   
  render(){
    return(
      <View style={ styles.container }>
        <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(texto) => this.setState({input: texto})}
        />
        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}> {this.state.nome}</Text> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
})


export default App;