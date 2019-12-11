import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss'
import Header from './header'
import '../styles/layout.scss'



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