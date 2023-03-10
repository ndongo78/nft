import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/EvilIcons"


export const ListHeader = () => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
         <Image source={require('../assets/images/logo.png')} style={styles.logo} />
         <TouchableOpacity>
         <Image source={require('../assets/images/person01.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <View style={styles.header} />
      <View style={styles.containerHText}>
      <Text style={{color:"#fff",fontSize:20}}>Hello linda 👋</Text>
      <Text style={{color:"#fff",fontSize:30,fontWeight:"900"}}>Let's Find Masterpiece Art</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Icon name='search' style={styles.icon} size={30} />
        <TextInput 
         placeholder='search'
         style={styles.textInput}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    margin:15
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin:15
  },
  containerHText:{
        marginLeft:12
  },
  textInputContainer:{
    backgroundColor:"#A1A4B3",
    width: 300,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:15,
    alignItems:"center",
    margin:20
  },
  textInput:{
    padding:10,
    width:"100%",
    color:"#000",
    fontSize:20
  },
  icon:{
    marginLeft:2
  }
})