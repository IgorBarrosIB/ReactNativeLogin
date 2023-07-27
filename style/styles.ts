import {StyleSheet} from 'react-native';
import {colors, fontSizes, fontFamily} from './theme';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,// alinhamento nas laterais 
    paddingTop: 50
  },
  container: {
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  textoBackgroudColor: {
    
  },
  texto: {
    
  },
  h1: {
    color: '#000',
    fontSize: fontSizes.extraLarge,
    fontWeight: 'bold', 
    fontFamily: fontFamily.title,
    marginVertical: 10
  },
  h2: {
    color: '#999',
    fontSize: fontSizes.medium,
    fontFamily: fontFamily.caption
  },
  inputArea: {
    width: '100%',
    paddingTop: 20
  },
  label:{
    color: '#777',
    fontSize: fontSizes.medium,
    fontFamily: fontFamily.caption,
    fontWeight: 'bold', 
    marginBottom: 7
  },
  inputField: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#DDD',
    fontSize: fontSizes.small,
    padding: 10 
  },
  aditionals:{
    width: '100%'
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end'
  },
  forgotBtnText: {
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    color: '#4162B7'
  },
  button: {
    backgroundColor: '#4162B7',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    color: 'black'
  },
  buttonText:{
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: fontSizes.medium
  },
  signUpArea:{
    flexDirection: 'row',
    marginTop: 30 
  },
  signUpText:{
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    color: '#999'
  },
  signUpBtnText:{
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    color: '#4162B7',
    marginLeft: 5
  },
  cupom:{
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    color: '#696969',
    marginLeft: 5
  },
  footerArea:{
    marginVertical: 30
  },
  footerText:{
    fontSize: fontSizes.small,
    color: '#999',
    fontWeight: '500'
  },
  signUpAreaCupom: {
    flexDirection: 'row',
    marginTop: 15
  },
  status:{
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    color: '#696969',
    marginTop: 20
  }
});