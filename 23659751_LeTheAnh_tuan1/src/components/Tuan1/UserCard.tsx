import React from 'react'
import { View , Text} from 'react-native'

type MyType={
      name: string, 
      age: number,
      isAdmin: boolean
  }


function UserCard({name, age, isAdmin}: MyType) {
  return (
    <div>
      <View style={{backgroundColor: isAdmin? "green" : "yellow"}}>
          <Text>Name:  {name}</Text>
          <Text>Age:  {age}</Text>
          <Text>Admin:  {isAdmin ? "Admin" : "Nguoi dung"}</Text>
      </View>
    </div>
  )
}

export default UserCard
