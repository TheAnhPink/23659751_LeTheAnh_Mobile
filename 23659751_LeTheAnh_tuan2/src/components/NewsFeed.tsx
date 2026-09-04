import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

type Post={
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
function NewsFeed() {
    const [dlieu, setDlieu]= useState<Post[]>()

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(resp=>resp.json())
        .then(data=> setDlieu(data as Post[]))
    },[])

  return (
    <View>
        <FlatList
        data={dlieu}
        renderItem={({item})=>(
            <Text style={{backgroundColor: "green", width: 200, margin: 5}}>{item.title}</Text>
        )}
        keyExtractor={(item)=>(item.id.toString())}
        
        ></FlatList>
    </View>
  )
}

export default NewsFeed
