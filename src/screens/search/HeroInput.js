import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {View, TextInput, StyleSheet} from 'react-native'

const HeroNameInput = ({ heroName, setHeroName }) => {
  const dispatch = useDispatch()
  return (
    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: "center", height: 50 }}>
      <TextInput
        style={heroInputStyles.textInput}
        placeholder="Enter your hero's name"
        value={heroName}
        onChangeText={(text) => {
          setHeroName(text)
        }}
        onSubmitEditing={() => {
          dispatch({ type: 'FIND_HEROES_ASYNC', payload: heroName })
        }}
      />
    </View>
  )
}

const heroInputStyles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 15,
    color: 'black'
  },
})

export default HeroNameInput