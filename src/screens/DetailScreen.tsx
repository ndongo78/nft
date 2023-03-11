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
       <View>
        <Image
        source={item.image}
         style={styles.image}
         resizeMode="cover"
        />
       </View>
       <View style={{
         flexDirection:"row" ,
         justifyContent:"space-between",
         width:"100%"
       }}>
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
                marginRight: -10
              }}
            />
         ))
        }
        </View>
        <View style={{
          backgroundColor:"#fff",
          position:"absolute",
          right:10,
          bottom:-25,
          borderRadius:10
        }}>
        <Text style={{fontSize:25,fontWeight:"bold",
          padding:3
        }}>Fini dans</Text>
        <Text  style={{fontSize:25,fontWeight:"bold",
        }}> 15h 30mn </Text>
        </View>
        </View>
         <Text style={styles.title}> {item.name} </Text>
         
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
    height:300,
    zIndex:-999
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
    position :"absolute",
    bottom:-20,
    left:15,
    zIndex:999
  },
  title:{
    fontSize:25,
    marginTop:30,
    fontWeight:"900",
  }
})