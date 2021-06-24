
import React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,

 } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png'
import{ styles } from './styles'

export function SignIn() {
    


  return (
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


      <ButtonIcon
       title="Entrar com Discord"
       activeOpacity = {0.7}
       />
      

  </View>

</View>

    
  );
  }