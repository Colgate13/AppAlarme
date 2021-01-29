import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


export default function Contador(props) {
 

    var done = false;

    useEffect(() => {

        const timer = setInterval(() => {
            props.setSegundos(props.segundos - 1);

            if(props.segundos <= 0)
            {
                if(props.minutos > 0){
                    props.setMinutos(minutos - 1);
                    props.setSegundos(59);
                }else {
                    if(!done){
                        done = true;
                        props.setEstado('selecionar');
                        props.setMinutos(0);
                        props.setSegundos(1);
                    }
                }
            }
        }, 1000)
        return () => clearInterval(timer);



    })

    function resetar(){
        props.setEstado('selecionar');
        props.setMinutos(0);
        props.setSegundos(1);
    }

    function formatarNumero(number){
        var finalNumber = "";
        if(number < 10)
        {
            finalNumber = "0"+number;
        }else{
            finalNumber = number;
        }
        return finalNumber;
    }

    var segundos = formatarNumero(props.segundos);
    var minutos = formatarNumero(props.minutos);
    return(
        <View style={styles.container}>
        <StatusBar style="auto" />
        <LinearGradient 
        colors={[ 'rgb(80,50,168)' ,'rgb(71, 40, 102)' , 'rgb(71, 40, 102)' , 'rgb(71, 40, 102)' ]}
        style={{ 
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
        }}/>

        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textContador}>{minutos} : </Text>
            <Text style={styles.textContador}>{segundos}</Text>
        </View>
        <TouchableOpacity onPress={() => resetar()} style={styles.btnBack}><Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 35, color: 'rgb(252, 71, 116)' }}>Resetar</Text></TouchableOpacity>
</View>
    );
}

const styles = StyleSheet.create({
 container:{
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
 },
 textContador:{
     color: 'white',
     fontSize: 40,
 },
 btnBack:{
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
