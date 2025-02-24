import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../screens/Login'

const Contenido = () => {
  return (
    <View style={styles.container}>
      <Text>Contenido</Text>
      <Login/>
    </View>
  )
}

export default Contenido

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'black',
        borderRadius:10
    }
})