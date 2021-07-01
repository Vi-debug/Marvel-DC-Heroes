import { call, put, takeEvery } from 'redux-saga/effects'
import { getHeroes } from './slice'
import { getHeroesAction } from './slice'

export function* watchFindHeroAsync() {
  yield takeEvery('FIND_HEROES_ASYNC', findHeroesAsync)
}

export function* findHeroesAsync(action) {
  const listHeroes = yield call(getHeroes, action.payload)
  yield put({type: getHeroesAction.type, payload: listHeroes})
}