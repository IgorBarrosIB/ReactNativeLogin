import React , {useState} from 'react'
import {Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import {styles} from './style/styles';

const  App = () => {

  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordFiled] = useState<string>('');

  const handleLoginButton = () => {
    alert(emailField);
    alert(passwordField);
  };

  const handleForgetButton = () => {};
  const handleSingUpButton = () => {};

  return(
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/Logo.png')} />
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.inputField} placeholder='Digite seu email'
          placeholderTextColor={"#999"} value={emailField} onChangeText={t => setEmailField(t)}
          autoCapitalize='none' keyboardType='email-address' 
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.inputField} placeholder='********' secureTextEntry placeholderTextColor={"#999"}
          value={passwordField} onChangeText={t => setPasswordFiled(t)}/>
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity onPress={handleForgetButton} style={styles.forgotBtnArea}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLoginButton} style={styles.button} >
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem uma conta</Text>
          <TouchableOpacity onPress={handleSingUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Igor Barros</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;
