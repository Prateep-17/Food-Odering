import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getRestaurent, restuarentList } from '../feature/restaurentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../feature/store'
import RestaurantListItem from '../components/RestaurantListItem'
import Geolocation from '@react-native-community/geolocation'

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const resList = useSelector(restuarentList);    
    const [text, setText] = useState('')
    const [filteredList,setFilteredList] = useState(resList)
    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
      authorizationLevel: 'whenInUse',
      enableBackgroundLocationUpdates: false,
      locationProvider: 'android'
    });

  useEffect(() => {
    Geolocation.getCurrentPosition(info => dispatch(getRestaurent({latitude: info.coords.latitude, longitude: info.coords.longitude})));
  }, [])
   
  console.log(resList.map((restaurant :any)=>(restaurant.info.name)));
  function search(text: string){
    if(text !== ''){
      const list :any = []
      resList.map((restuarent :any)=>
        restuarent.info.name.includes(text) && list.push(restuarent))
      setFilteredList(list)
    }
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Search a restaurent"
        />
        <Pressable style={styles.searchBtn} onPress={()=>search(text)}>
          <Text>Search</Text>
        </Pressable>
      </View>
        <FlatList
          data={filteredList}
          renderItem={({item}) => <RestaurantListItem restaurant={item}/>}
          keyExtractor={item => item.info.id}
          numColumns={2}
          contentContainerStyle={{padding:5, gap:8}}
          columnWrapperStyle={{gap:8}}
        />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    margin:10,
    paddingHorizontal:10,
    borderRadius:5,
    position:'relative'
  },
  searchBtn:{
    position: 'absolute',
    alignSelf: 'center',
    right: 11,
    bottom:11,
    borderTopEndRadius:5,
    borderBottomEndRadius:5,
    paddingVertical:15,
    paddingHorizontal:30,
    backgroundColor:"orange",
    color:"white"
  }
})