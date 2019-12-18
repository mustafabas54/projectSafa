import Layout from './layout'
import { StoreProvider } from '../Store'

const App = () => {
    return(
        <StoreProvider>
            <Layout />
        </StoreProvider>
    )
}

export default App