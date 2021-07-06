import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableHighlight, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getHeroes } from '../redux/slice'


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
  return (
    <View style={searchStyles.form}>
      <View>
        <Text style={searchStyles.title}>Marvel DC Heroes</Text>
        <HeroNameInput
          heroName={heroName}
          setHeroName={setHeroName}
        />
      </View>
      <FlatListHeroes/>
    </View>
  )
}

const HeroNameInput = ({ heroName, setHeroName }) => {
  const dispatch = useDispatch()
  return (
    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: "center", height: 50 }}>
      <TextInput
        style={searchStyles.textInput}
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


const FlatListHeroes = () => {
  // get the state of store by using useSelector
  const { listHeroes } = useSelector(state => state)
  const navigationRef = useRef(useNavigation())
  return (listHeroes != undefined && listHeroes.length > 0) ? (
    <FlatList
      style={searchStyles.flatList}
      data={listHeroes}
      renderItem={({ item: hero }) => (
        <TouchableWithoutFeedback onPress= {() => navigationRef.current.navigate('Detail', {hero: hero})}>
          <View style={{ flexDirection: 'row', paddingBottom: 5, paddingHorizontal: 10 }}>
            <Image source={{ uri: hero.image.url }} style={{ width: 70, height: 100, marginBottom: 10 }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>{hero.name}</Text>
              <Text style={{ color: 'black' }}>{hero.biography['full-name']}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  ) : <Text style={{ color: 'white', marginTop: 20, alignSelf: 'center'}}>No Hero founded</Text>
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
  textInput: {
    flex: 1,
    fontSize: 16,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 15,
    color: 'black'
  },
  searchButton: {
    backgroundColor: '#4287f5',
    padding: 4,
    marginLeft: 10,
    borderRadius: 15,
  },
  flatList: {
    backgroundColor: 'white',
    paddingTop: 5,
    borderRadius: 10,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
  }
})
export default SearchScreen
