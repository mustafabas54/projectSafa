import '../styles/cardefects.scss'

const CardEfects = () => {
    return(
        <div>
            <div className='box mt-5' >
                <div className='card card-one'>
                    <div className='imgBx'>
                        <img src='/img/ben2.jpg' alt='foto'></img>
                    </div>
                    <div className='details'>
                        <h2>Mustafa Baş<span>Yazılım Uzmanı</span></h2>
                    </div>
                </div>
            </div>
            <div className='card2-tumu mt-5'>
                <div className='card1'>
                    <img src="/img/ben1.jpg" alt=""></img>
                    <h3>Mustafa Bas</h3>
                    <p>Ne cimbom fener senin sevgin bir ömre bedel Ne sokağa nede stada sığmaz ki bu sevda dünyaya Haydi bastır şanlı SAKARYA !</p>
                </div>
                    <div className='card2'>
                    <img src="/img/ben2.jpg" alt="Eiffel Tower"></img>
                    <h3>Mustafa Bas</h3>
                    <p>Ne cimbom fener senin sevgin bir ömre bedel Ne sokağa nede stada sığmaz ki bu sevda dünyaya Haydi bastır şanlı SAKARYA !</p>
                </div>
                <div className='card3'>
                    <img src="/img/ben3.jpg" alt=""></img>
                    <h3>Mustafa Bas</h3>
                    <p>Ne cimbom fener senin sevgin bir ömre bedel Ne sokağa nede stada sığmaz ki bu sevda dünyaya Haydi bastır şanlı SAKARYA !</p>
                </div>         
            </div>
            <div className='cont'>
  <div className='overlay'>
    <div className = 'items'></div>
    <div className='items head'>
        <p>Et iskender ;</p>
    </div>
    <div className = 'items price'>
      <p className='old'>$25 TL</p>
      <p className='new'>$20 TL</p>
    </div>
    <div className='items cart'>
      <i className='fa fa-shopping-cart'></i>
      <span>Safa Aperatif..</span>
  </div>

        </div>
        </div>
        </div>
            
    )
}
export default CardEfects

