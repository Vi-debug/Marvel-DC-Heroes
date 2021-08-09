import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableHighlight, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getHeroes } from '../../redux/slice'
import FlatListHeroes from './FlatListHeroes';
import HeroNameInput from './HeroInput'


const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../background1.png')} style={searchStyles.backGround} />
      <SearchForm></SearchForm>
    </View>
  )
}

const SearchForm = () => {
  const [heroName, setHeroName] = useState('')
  // get the state of store by using useSelector
  const { listHeroes } = useSelector(state => state)
  return (
    <View style={searchStyles.form}>
      <View>
        <Text style={searchStyles.title}>Marvel DC Heroes</Text>
        <HeroNameInput
          heroName={heroName}
          setHeroName={setHeroName}
        />
      </View>
      <FlatListHeroes listHeroes={listHeroes}/>
    </View>
  )
}

const searchStyles = StyleSheet.create({
  backGround: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  },
  form: {
    padding: 15,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'center'
  },
  
  searchButton: {
    backgroundColor: '#4287f5',
    padding: 4,
    marginLeft: 10,
    borderRadius: 15,
  },
})
export default SearchScreen
