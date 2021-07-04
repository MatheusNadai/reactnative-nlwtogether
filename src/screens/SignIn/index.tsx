
import React from 'react';

import {
  Text,
  View,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,

 } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png'
import{ styles } from './styles'
import {useAuth} from '../../hooks/auth'

import {Background} from '../../components/Background';
import { then } from '../../../metro.config';
import { theme } from '../../global/styles/theme';






export function SignIn() {
  const {loading, signIn} = useAuth();

 async function handleSignIn() {
    try{
      await signIn();

    }catch(error) {
      Alert.alert(error)
    }
  
  }


    return (
    <Background>
      <View style={styles.container}>

        
        
        <Image source ={IlustrationImg} 
        style = {styles.image}
        resizeMode = "stretch"
        
        />

      <View style = {styles.content}>
        <Text style = {styles.title}>
        Conecte-se{`\n`}
        e organize suas{`\n`}
        jogatinas

        </Text>


        <Text style={styles.subtitle}>
        Crie grupos para jogar seus games{`\n`}
        favoritos com seus amigos


        </Text>

      {
        loading ? <ActivityIndicator color = {theme.colors.primary}/>
        :
        <ButtonIcon
        title="Entrar com Discord"
        onPress = {handleSignIn}
        />
      } 

    </View>

  </View>
  </Background> 
      
  );
  }