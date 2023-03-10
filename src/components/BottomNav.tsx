import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ant from "react-native-vector-icons/AntDesign"

const BottomNav = () => {

  const navLinks=[
    {icon:"appstore-o",name:"Home"},
    {icon:"shoppingcart",name:"Cart"},
    {icon:"message1",name:"Message"},
    {icon:"hearto",name:"Favorite"},
  ]

  return (
    <View style={styles.navContainer}>
      {
        navLinks.map((navLink=>(
            <TouchableOpacity key={navLink.icon}>
            <Ant name={navLink.icon} style={styles.icon} />
            </TouchableOpacity>
        )))
      }
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    navContainer:{
        flexDirection:"row",
    },
    icon:{
        color:"#DEE0E8",
        fontSize:30,
        margin:10,
        padding:10
    }
})