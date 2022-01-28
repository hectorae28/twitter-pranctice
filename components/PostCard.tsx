import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import React from 'react';

const PostCard = (props:any) => {
  return (
    <View style={styles.cardContainer}>
        <Text
            style={styles.title}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            {props.title}
        </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text
            style={styles.body}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            {props.body}
        </Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
    cardContainer:{
        margin:5,
        padding:10,
        borderWidth:1,
        borderColor:'#aaa',
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: '95%',
        alignSelf:'center'
    },
    body:{
        fontSize:15,
    }
})
