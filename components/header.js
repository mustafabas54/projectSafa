import Link from 'next/link'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-holder'>
                <img className='logo'  src='/img/logo.png'></img>
            </div>
            <div className='menu-bar'>
                <div className='menu-items'>
                    <ul className='menu-list'>
                        <li>
                            <Link href='/'><a className='header-menu-link'>Anasayfa</a></Link>
                        </li>
                        <li>
                            <Link href='/urunler'><a className='header-menu-link'>Ürünlerimiz</a></Link>
                        </li>
                        <li>
                            <Link href='/fiyatlistesi'><a className='header-menu-link'>Fiyat Listesi</a></Link>
                        </li>
                        <li>
                            <Link href='/iletisim'><a className='header-menu-link'>İletişim</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header