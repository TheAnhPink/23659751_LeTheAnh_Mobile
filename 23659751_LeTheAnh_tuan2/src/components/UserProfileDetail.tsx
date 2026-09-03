import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

type MyType={
    id: number
  name: string
  username: string
  email: string
  address: AddressType
  phone: string
  website: string
  company:CompanyType

}

type CompanyType={
    name: string,
    catchPhrase: string
    bs: string
}

type GeoType={
    lat:string
    lng: string
}
type AddressType={
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo:GeoType
}
function UserProfileDetail() {
    const [user, setUser]= useState<MyType|null>(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(resp=>(resp.json()))
        .then(data=>(setUser(data as MyType)))
    },[])
  return (
    <View style={{margin: 10}}>
        <Link href={"/"} style={{backgroundColor:"pink", width:100, borderColor: "black", borderWidth:1}}>
        Trang chủ</Link>
        <br />
        <Text>THông tin user bài 2:</Text>
      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>City: {user?.address.city}</Text>
      <Text>Phone: {user?.phone}</Text>
      
    </View>
  )
}

export default UserProfileDetail
