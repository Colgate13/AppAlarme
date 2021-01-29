import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Contador from './pages/Contador';
import Home from './pages/home';

export default function App() {
  
  const [estado, setEstado] = useState('selecionar');
  const [segundos, setSegundos] = useState(1);
  const [minutos, setMinutos ] = useState(0);
  
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

  


  if(estado == 'selecionar'){

    return (<Home SetAlarmeSound={SetAlarmeSound} estado={estado} setEstado={setEstado} alarmeSound={alarmeSound} setSegundos={setSegundos}  setMinutos={setMinutos} minutos={minutos} segundos={segundos}></Home>);

}else if(estado == 'iniciar'){
  return(
    
       <Contador SetAlarmeSound={SetAlarmeSound} setEstado={setEstado} minutos={minutos} segundos={segundos} setSegundos={setSegundos}  setMinutos={setMinutos}></Contador>
    
    );
    
}
}
