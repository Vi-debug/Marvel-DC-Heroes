import React, { createContext, useContext } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const HeroContext = createContext(null)

const DetailScreen = ({ route }) => {
  const { hero } = route.params
  return (
    <HeroContext.Provider value = {hero}>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#F7F0D6', paddingBottom: 10}}>
          <HeroName />
          <HeroImage />
          <HeroPowerStats />
          <HeroCategory category={hero.biography} title='Biography' />
          <HeroCategory category={hero.appearance} title='Appearance' />
          <HeroCategory category={hero.work} title='Work' />
          <HeroCategory category={hero.connections} title='Connections' />
        </View>   
      </ScrollView>
    </HeroContext.Provider>
  )
}

const HeroName = () => {
  const hero = useContext(HeroContext)
  return (
    <View style={detailStyle.heroName}>
      <Text style={[{marginLeft: 10, fontWeight: 'bold'}, detailStyle.nameText]}>
        {hero.name.toUpperCase()}
      </Text>
      <Icon name='star' color='white' />
      <Text style={detailStyle.nameText}>
        {hero.biography['full-name']}
      </Text>
    </View>
  )
}

const HeroImage = () => {
  const hero = useContext(HeroContext)
  return (
    <View style={{ margin: 10, alignSelf: 'center'}} >
      <Image
        resizeMode = 'cover'
        source={{ uri: hero.image.url }}
        style={detailStyle.imageStyle}
      />
    </View>
  )
}

const HeroPowerStats = () => {
  const hero = useContext(HeroContext)
  const { intelligence, strength, speed, durability, power, combat } = hero.powerstats
  return (
    <View style={{ flexDirection: 'column', paddingHorizontal: 10}}>
      <View  style={{flexDirection: 'row'}}>
        <PowerStat category='Intel' stat={intelligence} color={orange} reverse = {true} />
        <PowerStat category='durable' stat={durability} color={blue} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <PowerStat category='Str' stat={strength} color={red} reverse={true}/>
        <PowerStat category='Power' stat={power} color={green}  />
      </View>
      <View style={{flexDirection: 'row'}}>
        <PowerStat category='Speed' stat={speed} color={redDark} reverse={true}/>
        <PowerStat category='Combat' stat={combat} color={yellow} />    
      </View>
    </View>
  )
}

const PowerStat = ({category, stat, color, reverse = false}) => {
  const hero = useContext(HeroContext)
   return (
    <View style ={{flexDirection: reverse ? 'row-reverse' : 'row', flex: 1}}>
      <View style={[detailStyle.powerStat]}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13}}>{category.toUpperCase()}</Text>
      </View>
      <View style = {[detailStyle.powerStatNum, {backgroundColor: color}]}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#1B1613'}}>{stat === 'null' ? '?' : stat}</Text>
      </View>
    </View>
  )
}

const HeroCategory = ({category, title}) => {
  return (
    <View style={{borderColor: black, borderWidth: 1, marginHorizontal: 10, marginTop: 15}}>
      <View style={{backgroundColor: black, padding: 5}}>
        <Text style={{ color: 'white' }}>{title}</Text>
      </View>
      {categoryInfo(category)}
    </View>
  )
}

const categoryInfo = (category) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      {Object.entries(category).map(([key, value]) => (
        <View style={{ flexDirection: 'row' }} key={key}>
          <View style={[detailStyle.categoryInfoItem, { flex: 3 }]}>
            <Text>{standardizedString(key)}</Text>
          </View>
          <View style={[detailStyle.categoryInfoItem, { flex: 5 }]}>
            <Text>{standardizedValue(value)}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

function standardizedString(key) {
  const find = '-'
  const regex = new RegExp(find, 'g')
  key = key.charAt(0).toUpperCase() + key.slice(1)
  return key.replace(regex, ' ')
}

function standardizedValue(value) {
  if (typeof value === 'string') return value === '-' ? 'unknown' : value
  return value.join('\n')
}
const black = '#3A3A3C'
const orange = '#C6722A'
const red = '#BF452E'
const redDark = '#84251A'
const blue = '#79A3B3'
const green = '#7F8D74'
const yellow = '#C1912D'


const detailStyle = StyleSheet.create({
  nameText: {
    padding: 5,
    color: 'white'
  },
  heroName: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: black,
    alignItems: 'center'
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'black'
  },
  powerStat: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: black,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1
  },
  powerStatNum: {
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderColor: 'white',
    borderWidth: 1,
  },
  categoryInfoItem: {
    borderWidth: 1,
    borderColor: black,
    padding: 3
  }
})
export default DetailScreen