import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Feed({ navigation }: RootTabScreenProps<'TabOne'>) {
  const url='https://jsonplaceholder.typicode.com/posts/'
  const [posts, setPosts] = useState(null);
  let post
  const getData=()=>{
    axios.get(url).then((response)=>{
      post=response.data
      console.log('getxd',post)
    }).catch((error)=>{
      console.log("fail axios :",error);
    }).finally(function () {
      // always executed
      alert('Finally called');
      return null
    });
  } 
  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/',
      );
      alert(JSON.stringify(response.data));
      post=response.data
      console.log(post)
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };
  useEffect(()=>{
    getDataUsingAsyncAwaitGetCall()
    getData()
  })
  
  if (!post)return (
    <View style={styles.container}>
      <Text  style={styles.title}>Loading...</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={post}
        initialNumToRender={50}
        keyExtractor={(item: { key: any; }) => item.id}
        ListHeaderComponent={()=>{
          return(
            <View  style={styles.container}>
              <Text style={styles.title}>Feed</Text>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </View>
          )
        }}
        renderItem={({ item })=><PostCard {...item}/>}
      /> */}
      {post.map((item:any)=><PostCard {...item}/>)}
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
