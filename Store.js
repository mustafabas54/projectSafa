export const Store = React.createContext();

let loggedIn = false
let gununMenusu = {
    tipi: 'Firsat Menu'
}

const initialState = { 
    loggedIn,
    gununMenusu
}

function reducer(state, action) {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, loggedIn: action.payload };
      default:
        return state;
    }
  }

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value = {value} >{props.children}
    </Store.Provider>
  }