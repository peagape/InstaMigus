import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



function ListaInstaMigus({ InstaMigusUsers }) {
  const [liked, setLikeState] = useState(false);

  //Deixa as curtidas dinamicas
  const rndInt = Math.floor(Math.random() * 80) + 27
  return (

  <View>

    {/* Imagem e nome pequeno */}
    <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
    
      <Image
        style={{
          marginRight: 15,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        source={{
          uri: `https://github.com/${InstaMigusUsers}.png`,
        }}  
      />
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{InstaMigusUsers} {InstaMigusUsers == 'ry' && '"Ryan Dahl"'}</Text>
      
      </View>

{/* Lista de img no Feed */}
      <View>
      <Image
        style={{
          width: '100%',
          height: 350
        }}
        source={{
          uri: `https://github.com/${InstaMigusUsers}.png`,
        }}  
      />
      </View>

      {/* Botoes de ações na foto */}
      <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
     
     {/* Botão like */}
        <TouchableOpacity onPress={()=> setLikeState(!liked)}>
          {liked && <Ionicons name="ios-heart" size={32} color="red" />}
          {!liked && <Ionicons name="ios-heart-outline" size={32} color="black" />}
        </TouchableOpacity>

        {/* Botão comentario */}    
        <TouchableOpacity>
        <Ionicons style={{paddingLeft: 20,}} name="chatbox-outline" size={32} color="black" />
        </TouchableOpacity>

        {/* Botão compartilha pub */}   
        <TouchableOpacity>
        <Ionicons style={{paddingLeft: 20,}} name="arrow-redo-outline" size={32} color="black" />
       
        </TouchableOpacity>

        
      </View>

       {/* curtidas na foto*/}
      <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 15,}}>{rndInt} curtidas</Text>
       
        {/* frase na foto*/}
      <Text style={{fontSize: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 10}}>Aqui poderia ter uma frase motivacional...</Text>
      
      <View></View>

  </View>
)

}


export default function App() {
  return (
  
    <SafeAreaView style={styles.container}> 

  
    <ScrollView >
      <StatusBar style="auto" />
      
      {/* Array com o usuarios do github */}
      {['peagape','ry','facebook','github'].map((InstaMigusUsers) =>
      <ListaInstaMigus key={InstaMigusUsers} InstaMigusUsers={InstaMigusUsers} />)}

    </ScrollView>


    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',

  },
});
