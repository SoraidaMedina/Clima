import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type propiedades={
    fecha:string,
    grupo:string
}

const Foother = (props:propiedades) => {
  return (
    <View style={styles.container}>
      <Text>{props.fecha}</Text>
      <Text>{props.grupo}</Text>
    </View>
  )
}

export default Foother

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'black',
        borderRadius:10
    }
})