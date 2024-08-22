import { Image, StyleSheet, Text, View } from 'react-native'

const RestaurantListItem = (restaurant :any) => {    
  return (
    <View style={styles.container}>
        <Image style={styles.image}
        source={{ uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ restaurant.restaurant.info.cloudinaryImageId}}/>
        <Text style={styles.name}>{restaurant.restaurant.info.name}</Text>
        <View style={styles.rating_dis}>
          <Text style={styles.rating}>{restaurant.restaurant.info.avgRating}</Text>
          <Text style={styles.distance}>{restaurant.restaurant.info.sla.lastMileTravelString}</Text>
        </View>
    </View>
  )
}

export default RestaurantListItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        padding:10
    },
    container_hover:{
      backgroundColor:'blue'
    },
    image:{
        width:"auto",
        height:100,
        borderWidth:1,
        borderColor:"#000",
        backgroundColor:'#fff'
    },
    name:{
      textAlign:'center',
      fontWeight:'800',
      fontSize:16,
      paddingTop:5,
      color:'#000'
    },
    rating_dis:{
      flex:1,
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems: "center"
    },
    rating:{
      backgroundColor:'green',
      padding:5,
      color:'white',
      borderRadius:5,
    },
    distance:{
      color:'#000',
      fontWeight:'500'
    }
})