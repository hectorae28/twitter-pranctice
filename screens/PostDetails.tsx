import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../store/users/action'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PostDetails = ({route}:any) => {
  const {title,body,userId}=route.params
  const dispatch=useDispatch()
  const {loading,error,user}=useSelector(state=>state.users)
  const navigation=useNavigation()
  useEffect(()=>{
    dispatch(getUsers(userId))
  },[])

  if (loading)return (
    <View style={styles.container}>
      <Text  style={styles.title}>Loading...</Text>
    </View>
  ) 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.body}>{body}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.body} onPress={()=>navigation.navigate('UserDetails',{userId:userId})}>by: {user.name}</Text>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:'5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '95%',
    alignSelf:'center'
  },
  body:{
    fontSize:20
  }
});
