import React, { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'

type Post={
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

type CustomerError={
    statusCode?: number
    message: string
}

function ErrorHandling() {

    const [dsPost, setDsPost]= useState<Post[]>()


    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const resp= await fetch("https://jsonplaceholder.typicode.com/todosSSS")
                
                if(!resp.ok){
                    const customerError: CustomerError={
                        statusCode: resp.status,
                        message: "Lỗi fetch, ko tìm thấy đường dẫn"
                    }
                    // ddeer nems loi vao catch
                    throw customerError
                }
                
                const data= await resp.json()
                setDsPost(data as Post[])
                
            } catch (error) {
                let errorMss= "lỗi ko xác định"
                                                        // co thuoc tinh mesage trong err ko
                if(typeof error ==='object' && error!= null&& 'message' in error){
                    const err= error as CustomerError
                    errorMss= err.message
                }else if(typeof error ==='string'){
                    errorMss= error
                }
                alert(`Lỗi gọi API: ${errorMss}`)
                // Alert.alert("Lỗi gọi API:", errorMss)
            }
        }

        fetchData()
    },[])

  return (
    <View>
      {dsPost?.map((item)=>(
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  )
}

export default ErrorHandling
