import '../styles/index.scss'
import Header from './header'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            BURAYA FOOTER GELİCEK
        </div>
    )
}

export default Layout 