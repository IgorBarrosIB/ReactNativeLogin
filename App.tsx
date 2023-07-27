import React , {useState} from 'react'
import {Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import {styles} from './style/styles';

const  App = () => {

  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordFiled] = useState<string>('');
  
  const [status, setStatus] = useState<string>('');
  const [showCupom, setShowCupom] = useState(false);

  const handleLoginButton = () => {
    alert(emailField);
    alert(passwordField);
  };

  const handleVerifyLogin = async () => {
    setStatus('');
    setShowCupom(false);

    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({
        email: emailField,
        password: passwordField
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await req.json();

    if(json.status == 'ok'){
      setStatus('Acesso LIBERADO!');
      setShowCupom(true);
    } else {
      setStatus('Acesso NEGADO!');
      setShowCupom(false);
    }
  }

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

        <TouchableOpacity onPress={handleVerifyLogin} style={styles.button} >
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.status}>{status}</Text>

        {showCupom && 
          <View style={styles.signUpAreaCupom}>
            <Text style={styles.signUpText}>Código de cupom:</Text>
            <Text style={styles.cupom}>JHXSDE</Text>
          </View>
        }

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
