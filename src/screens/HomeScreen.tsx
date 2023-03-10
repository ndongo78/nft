import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardItem } from '../components/CardItem'
import { NFTData } from '../constants'
import { ListHeader } from '../components/ListHeader';
import BottomNav from '../components/BottomNav';

export type Ntf = {
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
}[];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
         <View style={{marginTop:20}}>
         <FlatList
         data={NFTData}
         renderItem={({ item }) => <CardItem item={item} />}
         keyExtractor={item => item.id}
         ListHeaderComponent={ListHeader}
         />
         </View>
        <View style={styles.bottomNavC}>
            <BottomNav />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#1F3C5B',
        height: 300,
        zIndex: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    headerText: {},
    cardList: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
    },
    bottomNavC:{
        backgroundColor:"#040A0F",
        position:"absolute",
        bottom:5,
        alignSelf:"center",
        borderRadius:45
    }
})