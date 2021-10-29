import { getKoreanData } from "../App";

const initialState = {
    pokemonArray: [],
    koreanArray: [],
};

const SET_POKEMONS = 'SET_POKEMONS';
const SET_KOREAN_DATA = 'SET_KOREAN_DATA';
const CLEAN_kOREAN_DATA = 'CLEAN_kOREAN_DATA';

export const setPokemons = pokemonArray => ({ type: SET_POKEMONS, pokemonArray });
export const setKoreanData = koreanData => ({ type: SET_KOREAN_DATA, koreanData });
export const cleanKoreanData = () => ({ type: CLEAN_kOREAN_DATA });

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemonArray: action.pokemonArray
            };
        case SET_KOREAN_DATA:
            return {
                ...state,
                koreanArray: action.koreanData
            };
        case CLEAN_kOREAN_DATA:
            return {
                ...state,
                koreanArray: []
            }
        default:
            return state;
    };
};