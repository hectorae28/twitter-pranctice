import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';
import { Text, View } from '../components/Themed';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const getData=()=>{
     axios.get('https://jsonplaceholder.typicode.com/users/2').then((response)=>{
      setUser(response.data)
    }).catch((error)=>{
      console.log("fail axios :",error);
    })
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((response)=>{
      setPost(response.data)
    }).catch((error)=>{
      console.log("fail axios :",error);
    }) 
  }
  useEffect(()=>{
    getData()
  },[])
  
  
  if (!user||!post)return (
    <View style={styles.container}>
      <Text  style={styles.title}>Loading...</Text>
    </View>
  )
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{user?.name}</Text>
      <Text style={styles.username}>{user?.username}</Text>
      <Text style={styles.company}>{user?.company.name}</Text> 
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
        data={post}
        initialNumToRender={50}
        keyExtractor={(item: { key: any; }) => item.id}
        renderItem={({ item })=>(
          item.userId==user.id?
            <PostCard {...item}/>
            :null
        )
        }
      />
      
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:'5%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center',
    marginBottom:20
  },
  username:{
    fontSize:10,
  },
  company:{
    fontSize:15
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '95%',
  },
});


