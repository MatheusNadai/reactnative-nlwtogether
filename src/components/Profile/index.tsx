import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { styles } from './style';

import { RectButton } from 'react-native-gesture-handler';

export function Profile(){
    const {user, signOut} = useAuth();

function handleSignOut() {
    Alert.alert('Logout', 'Você deseja sair do Gameplay?',
    [
        {
            text: 'Não',
            style: 'cancel'
          },
          {
            text: 'Sim',
            onPress: () => signOut()
          }
    ]
    )
}

    return(
        <View style={styles.container}>
          
          <RectButton onPress={handleSignOut}>
            <Avatar urlImage={user.avatar}/>
          </RectButton>
            <View>
                <View style = {styles.user}>
                    <Text style = {styles.greeting}>
                        Olá, 

                    </Text>
                   <Text style = {styles.username}>
                       {user.firstName}
                    </Text> 
                </View>       

                    <Text style = {styles.message}>
                    Hoje é dia de VITÓRIA
                    </Text>
                

            </View>
        </View>

    )
}