

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
                        <a href="#"> Anasayfa </a>
                        </li>
                        <li>
                        <a href="#"> Ürünler </a>
                        </li>
                        <li>
                        <a href="#"> Fiyat Listesi </a>
                        </li>
                        <li>
                        <a href="#"> İletişim </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header