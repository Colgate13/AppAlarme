import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {LinearGradient } from 'expo-linear-gradient';

export default function App() {
  
  const [estado, setEstado] = useState('selecionar');
  const [segundos, setSegundos] = useState(0);
  const [ minutos, setMinutos ] = useState(0);
  
  const [alarmeSound, SetAlarmeSound] = useState([
      {
        id: 1,
        selecionado: true,
        som: 'Alarme 1',
        file: 'alarme1.mp3'
      },
      {
        id: 2,

        selecionado: false,
        som: 'Alarme 2',
        file: 'alarme2.mp3'

      },
      {
        id: 3,

        selecionado: false,
        som: 'Alarme 3',
        file: 'alarme1.mp3'
      },
      {
        id: 4,

        selecionado: false,
        som: 'Alarme 4',
        file: 'alarme1.mp3'
      },
  ]);

  function setAlarme(id)
  {
    let alarmeTemp = alarmeSound.map(function(val){
      if(id != val.id)
      {
        val.selecionado = false;
      }else if(id == val.id)
      {
        val.selecionado = true;
      }
      return val;
    })
    console.log(alarmeTemp);
    SetAlarmeSound(alarmeTemp);
    //alert("Alarme alterado");
  }

  var numeros = [];
  for(var i = 1; i <= 60; i++){
    numeros.push(i);
  }
  if(estado == 'selecionar'){

    return (
      <View style={styles.container}>
      <StatusBar style="auto" />
        <LinearGradient 
        colors={[ 'rgba(100,10,15,0.47)', 'transparent' ]}
        style={{ 
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}/>

      <Text style={{ color: 'white', fontSize: 30}}>Selecione seu tempo:</Text>
    <View style={{flexDirection: 'row'}}>
      <Text style={{ color: 'white'}}> Min: </Text>
      <Picker style={{ height: 50, width: 100,  color: 'white'}}
      selectedValue={minutos}
      onValueChange={(itemValue, itemIndex) => setMinutos(itemValue)}
      >
        

      {
        numeros.map(function(val){
          return(<Picker.Item label={val.toString()} value={val.toString()} />) 
          
        })
      }


      </Picker>

      <Text style={{ color: 'white'}}> Seg: </Text>

      <Picker style={{ height: 50, width: 100, color: 'white'}}
            selectedValue={segundos}
            onValueChange={(itemValue, itemIndex) => setSegundos(itemValue)}
            >
      <Picker.Item label='0' value='0' />
     {
       numeros.map(function(val){
         return(<Picker.Item label={val.toString()} value={val.toString()} />) 
         
        })
      }
      </Picker>
    </View>

      <View style={{ flexDirection: 'column'}}>
        {
          alarmeSound.map(function(val){
            if(val.selecionado)
            {
              
              return (
                
                <TouchableOpacity onPress={() => setAlarme(val.id)} style={styles.btnEscolherSelecionado}><Text style={{color: 'rgb(252, 71, 116)'}}>{val.som}</Text></TouchableOpacity>);
              }else{
                return (
                  
                  <TouchableOpacity onPress={() => setAlarme(val.id)} style={styles.btnEscolher}><Text style={{color: 'white'}}>{val.som}</Text></TouchableOpacity>);
                }
              })

        }
      </View>
          <TouchableOpacity onPress={() => setEstado('iniciar')} style={styles.btnIniciar}><Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 35, color: 'rgb(252, 71, 116)' }}>Iniciar</Text></TouchableOpacity>
    </View>
  );
}else if(estado == 'iniciar'){
  return(
    <View>
        <Text> Init </Text>
    </View>
    );
    
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80,50,168)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnEscolher:
  {
    margin: 10,
    alignItems: 'center',
    width: 200,
    padding: 8,
    backgroundColor: 'rgba(80,41,110,0.9)',
  },
  btnEscolherSelecionado:
  {
    margin: 10,
    fontSize: 15,
    alignItems: 'center',
    width: 200,
    padding: 8,
    backgroundColor: 'rgb(71, 40, 102)',
    borderColor: 'rgb(252, 71, 116)',
    borderWidth: 1,
    
  },
  btnIniciar:{
    backgroundColor: 'rgba(80,41,110,0.9)',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    margin: 20,
    borderWidth: 2,
    borderColor: 'rgb(252, 71, 116)',
  }
});
