export const GET_HEROES = 'GET_HEROES'

export const getHeroes = (heroName) => {
  try {
    return async dispatch  => {
      let response = await fetch(`https://www.superheroapi.com/api.php/2921691641435744/search/${heroName}`)
      let json = await response.json()
      const results = json.results
      dispatch({
        type: GET_HEROES,
        payload: results
      })
      
    }
  } catch (error) {
    console.log(error)
  }
}