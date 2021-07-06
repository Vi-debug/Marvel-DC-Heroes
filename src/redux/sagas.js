import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { getHeroes } from './slice'
import { getHeroesAction } from './slice'

export function* onFindHeroRequest() {
  yield takeLatest('FIND_HEROES_ASYNC', fetchHeroes)
}

function* fetchHeroes(action) {
  const heroName = action.payload
  const listHeroes = yield call(getHeroes, heroName)
  console.log(heroName)
  yield put({ type: getHeroesAction.type, payload: listHeroes })
}