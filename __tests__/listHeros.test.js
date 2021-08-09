import { describe } from '@jest/globals'
import { act, fireEvent, render, waitFor } from '@testing-library/react-native'
import React ,{useState} from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import HeroNameInput from '../src/screens/search/HeroInput'

describe('Hero input test', () => {

  test('greetWorld calls the greeting function properly', () => {
    const greetImplementation = name => `Hey, ${name}!`;
    const mockFn = jest.fn(greetImplementation);
    const value = greetWorld(mockFn);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('world');
    expect(value).toBe('Hey, world!');
  });
})
