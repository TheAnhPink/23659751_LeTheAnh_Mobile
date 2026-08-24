
import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import UserCard from '../components/Tuan1/UserCard'
import Counter from '../components/Tuan1/Counter'
import TodoList from '@/components/Tuan1/TodoList'
import MyButton from '@/components/Tuan1/MyButton'
import MyTextInput from '@/components/Tuan1/MyTextInput'
import LoadingContainer from '@/components/Tuan1/LoadingContainer'

  const todos=[
    { id: "1", title: "Học React Native" },
  { id: "2", title: "Học TypeScript" },
  { id: "3", title: "Làm bài tập" }
  ]

function index() {
  return (
    <View style={styles.container}>
      <h4>Bài 1: </h4> 
      <UserCard name="TheAnh" age={21} isAdmin={true}></UserCard>

      <h4>Bài 2: </h4>
      <Counter></Counter>

      <h4>Bài 3: </h4>
      <TodoList props={todos} ></TodoList>
      

      <h4>Bài 4: </h4>
      <MyButton label="Nhấn đi 1"
                onPressHam={()=>{console.log("Đã nhấn 1")}}
                color='pink'
      ></MyButton>
      <MyButton label="Nhấn đi 2"
                onPressHam={()=>{console.log("Đã nhấn 2")}}
      ></MyButton>
      

      <h4>Bài 5: </h4>
      <MyTextInput></MyTextInput>

      <h4>Bài 6: </h4>
      <LoadingContainer isLoading={true} children="Load xong rồi" ></LoadingContainer>

    </View>
  )
}

const styles= StyleSheet.create({
    container:{
      height: 678,
      width:400,
      borderWidth: 2,
      borderColor: "black",
      padding: 20,
      margin: 20,
      borderRadius: 15
    }
})

export default index
