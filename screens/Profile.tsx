import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'
import {getMyUsers} from '../store/users/action'
import PostCard from '../components/PostCard';
import { Text, View } from '../components/Themed';

export default function Profile() {
  const router=useNavigation()
  const dispatch=useDispatch()
  const User_Data=useSelector(state=>state.users)
  const Posts_data=useSelector(state=>state.posts) 
  const {loading,error,user} = User_Data
  console.log(user.id)
  const {post}=Posts_data
  
  useEffect(()=>{
    dispatch(getMyUsers())
  },[dispatch])

  
  if (loading)return (
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
            <TouchableOpacity onPress={()=>
              router.navigate('PostDetails',{
                title:item.title,
                body:item.body,
                id:item.id,
                userId:item.userId
              })
            }>
              <PostCard {...item} />
            </TouchableOpacity>
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


