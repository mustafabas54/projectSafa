import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss'
import Header from './header'
import Footer from './footer'
import Head from 'next/head'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Deneme</title>
            </Head>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout 