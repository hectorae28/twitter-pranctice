import { FlatList, StyleSheet, } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { View, Text } from '../components/Themed';

const UserDetails = ({route}:any) => {
    const {userId}=route.params
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const getData=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response)=>{
           console.log(response.data)
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
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.company}>{user.company.name}</Text> 
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <FlatList
          data={post}
          initialNumToRender={50}
          keyExtractor={(item: { key: any; }) => item.id}
          renderItem={({ item }:any)=>(
            item.userId==user.id?
              <PostCard {...item}/>
              :null
          )
          }
        />
      </View>
    );
};

export default UserDetails;

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
