import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {getPosts} from '../store/posts/action'
import PostCard from '../components/PostCard';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Feed({ navigation }: RootTabScreenProps<'TabOne'>) {
  const router=useNavigation()
  const { loading, error, post }= useSelector(state=>state.posts)
  const dispatch=useDispatch()
  useEffect(()=>{
    //post!=[]&&dispatch(getPosts())
    dispatch(getPosts())
    console.log('res')
  },[dispatch])
  
  if (loading)return (
    <View style={styles.container}>
      <Text  style={styles.title}>Loading...</Text>
    </View>
  )
  return (
    <View style={styles.container}>
       <FlatList
        data={post}
        initialNumToRender={20}
        keyExtractor={(item: { key: any; }) => item.id}
        ListHeaderComponent={()=>{
          return(
            <View  style={styles.container}>
              <Text style={styles.title}>Feed</Text>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </View>
          )
        }}
        renderItem={({ item }:any)=>(
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
          
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:'5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
