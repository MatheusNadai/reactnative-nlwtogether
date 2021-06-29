import React, {useState} from "react";
import { View, FlatList, Text} from "react-native";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader} from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./style";
import { Appointment } from "../../components/Appointment";
import { useNavigation } from "@react-navigation/native";


export function Home(){


    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);

    }

    const [category, setCategory] = useState('')
    const navigation = useNavigation();

    const appointments = [
     {
        id: '1',
        guild:{
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true,
            
        },
        category: '1',
        date: '22/06 às 20:40',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        
     },
     {
     id: '2',
     guild:{
         id: '1',
         name: 'Lendários',
         icon: null,
         owner: true,
         
     },
     category: '1',
     date: '22/06 às 20:40',
     description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
     
  },   
    ]

    function handleAppointmentDetails(){
      navigation.navigate('AppointmentDetails')

    }

    return(
        <>
        <View style={styles.header}>
        <Profile />
        <ButtonAdd/>
      </View>
    
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
          <ListHeader
            title = "Partidas agendadas"
            subtitle = "Total 6"
          />

          <FlatList 
          data = {appointments}
          keyExtractor = {item => item.id}
          renderItem = {({item}) => (
          <Appointment 
              data = {item}
              onPress = {handleAppointmentDetails}
          />     

          )} 
          ItemSeparatorComponent = {() => <ListDivider/>}         
          style = {styles.matches}
          showsVerticalScrollIndicator={false}
          
          
          />


      </View>
      </>
      
    )
}