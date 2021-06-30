import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getHeroes } from '../redux/actions'


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
  return (<View style={searchStyles.form}>
    <Text style={searchStyles.title}>Marvel DC Heroes</Text>
    <HeroNameInput
      heroName={heroName}
      setHeroName={setHeroName}
    />
    <FlatListHeroes/>
  </View>)
}

const HeroNameInput = ({ heroName, setHeroName }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: "center", height: 50 }}>
      <TextInput
        style={searchStyles.textInput}
        placeholder="Enter your hero's name"
        value={heroName}
        onChangeText={(text) => {
          setHeroName(text)
        }}
      />
      <SearchButton heroName={heroName}/>
    </View>
  )
}


function SearchButton({ heroName }) {
  const dispatch = useDispatch();
  const fetchHeroes = (heroName) => dispatch(getHeroes(heroName))
  return (
    <TouchableHighlight
      style={searchStyles.searchButton}
      onPress={() => fetchHeroes(heroName)}>
      <Icon name='search-web' size={26} color='white'/>
    </TouchableHighlight>
  );
}


const FlatListHeroes = () => {
  const { heroes } = useSelector(state => state.heroesReducer)
  return (heroes != undefined && heroes.length > 0) ? (
    <FlatList
      style={searchStyles.flatList}
      data={heroes}
      renderItem={({ item }) => (
        <View style={{ width: "100%", flexDirection: 'row' }}>
          <Image source={{ uri: item.image.url }} style={{ width: 70, height: 100, marginBottom: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: 'black' }}>{item.biography['full-name']}</Text>
          </View>
        </View>
      )}
    />
  ) : <Text style={{ color: 'white', marginTop: 20}}>No Hero founded</Text>
}
const searchStyles = StyleSheet.create({
  backGround: {
    flex: 1,
    width: null,
    height: null,
  },
  form: {
    flex: 1,
    padding: 15,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
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
    width: "100%",
    marginTop: 20,
    borderRadius: 5,
    maxHeight:650,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  }
})
export default SearchScreen
