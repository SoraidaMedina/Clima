import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type propiedades={
    titulo:string,
    nombre:string,
    imagen:string
}

const Header = (props:propiedades) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={ require('../../assets/otaku.png')}  style={styles.imagen}/>
      </View>   
      <View style={styles.container2}>
        <Text style={styles.titulo} >{props.titulo}</Text>
        <Text>{props.nombre}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'black',
        borderRadius:10
    },
    container2:{
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:'black',
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold'
    },
    imagen:{
        width:50,
        height:50,
        borderRadius:50,
        borderWidth:1,
        borderColor:'black',
        margin:5

    }

})
