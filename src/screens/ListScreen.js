 
import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,FlatList,Button} from 'react-native';




export default function ListScreen() {
    const list=[{id:10,name:"Coder"},
    {id:1,name:"Anirban"},
    {id:2,name:"Titun"},
    {id:3,name:"Ram"},
    {id:4,name:"Ajuba"},
    {id:5,name:"Ram"},
    {id:6,name:"Ajuba"},
    {id:7,name:"Ram"},
    {id:8,name:"Ajuba"},
];
  return (
    <View style={styles.container}>
      
      <FlatList
     
      keyExtractor={e=>e.id}
       data={list}
       style={styles.card}
       renderItem={({item})=>{
          return <Text style={styles.text} >{item.name}</Text>

      }}
      />
      <Button 
      onPress={()=>alert("hello")}
      title='Goto Component screen'/>

      <TouchableOpacity onPress={()=>alert("hi")}>

         <Text>Go to List Demo </Text> 
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
      fontSize:30,
      color:'white',
      backgroundColor:'#003366',
      margin:2,
      height:80,
      borderRadius:40,
      textAlign:'center',
      alignItems:'center',
    
  },
  card:{
      margin:20,
      width:"100%"
     

  }
});


