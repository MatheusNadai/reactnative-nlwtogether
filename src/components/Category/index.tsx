import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

   import DiscordImg from '../../assets/discord.png';
   import {styles} from './styles';
   import { categories } from '../../utils/categories';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

   type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
  }

   export function Category({
    title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest

   }: Props){
    const {secondary50, secondary70} = theme.colors;

       return(
     <RectButton {...rest}>

        <LinearGradient
        style={styles.container}
        colors={[secondary50,secondary70]} 
        >
            <View style = {[styles.content, {opacity: checked? 1 : 0.4} ]}>
                <View style = {checked ? styles.checked :  styles.check}/>


             
                    <Icon 
                        width = {48}
                        height = {48}
                    />

                    <Text style = {styles.title}>
                        {title} 
                    </Text>    


            </View>
        </LinearGradient>

    </RectButton>
       )
       }