import { StoreProvider, Store } from '../Store'
import LoginPage from '../components/loginPage'
import '../styles/panel.scss'
import Link from 'next/link'

const Gizli = () => {
    const { state, dispatch } = React.useContext(Store)

    const setGM = () => {
        return { type:'GM', payload: {tipi:'LALALAA'}}
    }

    const handleGM = () => {
        dispatch(setGM())
    }
    console.log(state)
    return(
        <div>Bu sayfa gizlidir.
            <button onClick={handleGM}>Degistir</button>
            <Link href='/'>
                <button>Anasayfa</button>
            </Link>
        </div>
    )
}

const CheckLogin = () => {
    const { state } = React.useContext(Store);
    if(state.loggedIn){
        return(
            <Gizli />
        )
    }else{
        return(
            <LoginPage />
        )
    }
}



const Panel = () => {
    return(
        <StoreProvider>
            <CheckLogin />
        </StoreProvider>
    )
}

export default Panel