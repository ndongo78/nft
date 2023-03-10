import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/Ionicons"
import { SIZES, assets } from '../constants'

export const DetailScreen = () => {
  const route=useRoute()
  const {item}=route.params;
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.btnHeader}>
        <TouchableOpacity style={styles.btn}>
          <Icon name='ios-chevron-back-outline' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon name='heart' style={styles.icon} />
        </TouchableOpacity>
        </View>
      </View>
        <Image
        source={item.image}
         style={styles.image}
        />
        <View style={styles.cardPeople}>
         {
         [assets.person01, assets.person02, assets.person03].map(item=>(
            <Image
              key={item}
              source={item}
              resizeMode="cover"
              style={{
                width: SIZES.font * 3,
                height: SIZES.font * 3,
                borderRadius: SIZES.font,
              }}
            />
         ))
        }
        </View>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    position: "absolute",
    top:50,
    zIndex:999,
    left:10,
    right:10,
  },
  btnHeader:{
    justifyContent:"space-between",
    flexDirection: "row",
    
  },
  image:{
    width: '100%',
    height:300
  },
  btn:{
    backgroundColor:"#fff",
    borderRadius:50
  },
  icon:{
     padding:15
  },
  cardPeople:{
    flexDirection:'row',
    position:'absolute',
    top:-25,
    left:10,
  }
})