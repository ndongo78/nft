import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SIZES ,assets } from '../constants';
import { CircleButton } from './Buttons';
import { useNavigation } from '@react-navigation/native';



interface Props {
    item:{
      id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: any;
    bids: {
        id: string;
        name: string;
        price: number;
        image: any;
        date: string;
    }[];
    }
}

export const  CardItem=({item}:Props)=> {
  const navigation=useNavigation<any>()
  return (
    <TouchableOpacity 
    style={styles.card}
    onPress={()=>navigation.navigate("Details",{item:item})}
    >
       <View
        style={{
          width: "100%",
          height: 250,
        }}
       >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton 
        imgUrl={assets.heart} 
        right={10} top={10} 
        />
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'relative',
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
              }}
            />
         ))
        }
        </View>
      <View style={styles.cardTime}>
        <Text style={styles.cardTimeTitle}>Heure de fin</Text>
        <Text style={styles.cardTimeSubtitle}> 12h 30 </Text>
        </View>
        </View>
        <View style={styles.cardFooter}>
        <Text style={styles.cardFooterTitle}>{item.name}</Text>
        <Text style={styles.cardFooterSubtitle}> by {item.creator}</Text>
        </View>
         <View style={styles.cardPrices}>
        <View style={styles.cardPrice}>
        <Image   source={require('../assets/icons/eth.png')} style={styles.cardFooterIcon}/>
        <Text style={styles.cardPriceTitle}>{item.price}</Text>
        </View>
        <View
        style={{
          justifyContent:"flex-end",
          alignItems:"flex-end",
        }}
        >
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.cardPriceSubtitle}>Placer de bird</Text>
          </TouchableOpacity>
        </View>
        </View>
        
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    card:{
       // backgroundColor:'#e6e6e6',
        width:370,
        margin:10,
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor:'#fff',
        marginBottom:15,
    },
    image:{
      width:'100%',
      height:'90%',
      zIndex:0
    },
    cardPeople:{
      flexDirection:'row',
      position:'absolute',
      top:-25,
      left:10,
    },
    cardTime:{
      backgroundColor:'#fff',
      position:'absolute',
      top:-33,
      right:5,
      borderBottomEndRadius:10,
      borderBottomStartRadius:10,
      justifyContent:'center',
      alignItems:'center',
    },
    cardTimeTitle:{
      fontSize:SIZES.small,
      fontWeight:'500',
      color:'#000',
      padding:5,
    },
    cardTimeSubtitle:{
      fontSize:SIZES.large,
      fontWeight:'400',
      color:'#000',
    },
    cardFooter:{},
    cardFooterTitle:{
      fontSize:SIZES.large,
      fontWeight:'600',
      color:'#000',
      marginTop:25,
      marginLeft:10,
    },
    cardFooterSubtitle:{
      fontSize:SIZES.small,
      fontWeight:'500',
      color:'#000',
      marginLeft:15,
      opacity:0.5,
    },
    cardPrice:{
      flexDirection:'row',
    },
    cardFooterIcon:{
      width:25,
      height:25,
      margin:10,
    },
    cardPriceTitle:{
      fontSize:SIZES.large,
      fontWeight:'600',
      color:'#000',
      margin:10,
    },
    cardPrices:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    btn:{
      backgroundColor:'#000',
      padding:10,
      borderRadius:10,
      margin:15,
    },
    cardPriceSubtitle:{
      fontSize:SIZES.font,
      fontWeight:'800',
      color:'#fff',
      padding:3,
    },
})