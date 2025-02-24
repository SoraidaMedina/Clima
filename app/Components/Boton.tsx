import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

type props={
    titulo:string,
    onPress:()=>void,
    variante?:'primario'|'secundario'|'peligro',
    estilo?:StyleProp<ViewStyle>,
    disable?:boolean,
    icono?:React.ReactNode,
    posicionIcono?:'izquierda'|'derecha'
}

const Boton = (Props:props) => {
    const getVariante=()=>{
        switch(Props.variante){
            case 'secundario': return styles.secuandario;
            case 'peligro': return styles.peligro;
            default: return styles.primario
        }
    }
  return (
    <Pressable onPress={Props.onPress} 
    style={[styles.boton,getVariante(), Props.estilo , Props.disable && styles.disable]} 
    disabled={Props.disable}>
        {Props.icono && Props.posicionIcono !== 'derecha' && Props.icono}
        <Text style={styles.titulo} >{Props.titulo}</Text>
        {Props.icono && Props.posicionIcono === 'derecha' && Props.icono}
    </Pressable>
  )
}

export default Boton

const styles = StyleSheet.create({
    boton:{
        backgroundColor:'#4B2E1E',
        flexDirection:'row',
        padding:10,
        borderWidth:2,
        borderColor:'#3F704D',
        borderRadius:15
    },
    titulo:{
        color:'white',
        marginStart:10
    },
    primario:{
        backgroundColor:'#4B2E1E'
    },
    secuandario:{
        backgroundColor:'#A67B5B'
    },
    peligro:{
        backgroundColor:'red'
    },
    disable:{
        opacity:.6
    }
})