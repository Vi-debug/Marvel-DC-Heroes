import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listHeroes: []
}

export const heroesSlice = createSlice({
  name: 'heroesSlice',
  initialState: initialState,
  reducers: {
    getHeroesByName: (state, action) => {
      state.listHeroes = action.payload
    }
  }
})

export const getHeroes = async (heroName) =>  {
  try {
    let response = await fetch(`https://www.superheroapi.com/api.php/2921691641435744/search/${heroName}`)
    let json = await response.json()
    const results = json.results
    return results
  } catch (error) {
    console.log(error)
  }
}

export const getHeroesAction = heroesSlice.actions.getHeroesByName
export default heroesSlice.reducer