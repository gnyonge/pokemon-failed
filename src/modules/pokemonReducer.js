const initialState = {
    pokemonArray: [],
    koreanArray: [],
    likeArray: [],
};

const SET_POKEMONS = 'SET_POKEMONS';
const SET_KOREAN_DATA = 'SET_KOREAN_DATA';
const LIKE_POKEMON = 'LIKE_POKEMON';

export const setPokemons = pokemonArray => ({ type: SET_POKEMONS, pokemonArray });
export const setKoreanData = koreanData => ({ type: SET_KOREAN_DATA, koreanData });
export const likePokemon = pokemonName => ({ type: LIKE_POKEMON, pokemonName });

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
        case LIKE_POKEMON:
            if (state.likeArray.includes(action.pokemonName)) {
                return {
                    ...state,
                    likeArray: state.likeArray.filter(name => name !== action.pokemonName)
                }
            }
            return {
                ...state,
                likeArray: state.likeArray.concat(action.pokemonName)
            }
        default:
            return state;
    };
};