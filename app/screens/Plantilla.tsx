import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Foother from '../Components/Foother'
import Contenido from '../Components/Contenido'

const Plantilla = () => {
  return (
    <View style={styles.container}>
      <Header titulo='Calculadora' nombre='Luis Alberto Mendoza' imagen='../../assets/myAvatar.png'/>
      <Contenido/>
      <Foother fecha='07/02/2025' grupo='5B'/>
    </View>
  )
}

export default Plantilla

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'stretch'
    }
})