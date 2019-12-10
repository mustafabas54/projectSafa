

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-holder'>
                <img className='logo' src='/img/logo.png'></img>
            </div>
            <div className='menu-bar'>
                <div className='menu-items'>
                    <ul className='menu-list'>
                        <li>
                            Anasayfa
                        </li>
                        <li>
                            Ürünler
                        </li>
                        <li>
                            Fiyat Listesi
                        </li>
                        <li>
                            İletişim
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header