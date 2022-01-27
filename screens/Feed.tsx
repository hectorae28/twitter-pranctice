import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FeedCard from '../components/FeedCard';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Feed({ navigation }: RootTabScreenProps<'TabOne'>) {
  const url='https://jsonplaceholder.typicode.com/posts/'
  const [post, setpost] = useState(null);
  useEffect(()=>{
    axios.get(url).then((response)=>{
        setpost(response.data)

    }).catch((error)=>{
        console.log("fail axios :");
    })
  })
  if (!post)return (
    <View>
      <Text>f</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
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
        renderItem={({ item })=>(
          <FeedCard
            title={item.title}
            body={item.body}
          />
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
