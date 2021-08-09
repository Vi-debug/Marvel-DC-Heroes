import React, {useRef} from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const FlatListHeroes = ({ listHeroes }) => {
  //const navigationRef = useRef(useNavigation())
  return (listHeroes != undefined && listHeroes.length > 0) ? (
    <FlatList
      style={listHeroesStyle.flatList}
      data={listHeroes}
      renderItem={({ item: hero }) => (
        <TouchableWithoutFeedback onPress={() => navigationRef.current.navigate('Detail', { hero: hero })}>
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
  ) : <Text style={{ color: 'white', marginTop: 20, alignSelf: 'center' }}>No Hero founded</Text>
}
const listHeroesStyle = StyleSheet.create({
  flatList: {
    backgroundColor: 'white',
    paddingTop: 5,
    borderRadius: 10,
    marginTop: 10, 
    borderColor: 'black',
    borderWidth: 1,
  },
})
export default FlatListHeroes