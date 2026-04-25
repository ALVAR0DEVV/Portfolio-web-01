import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                    <p>Óla, sou <br />
                        <span>Álvaro César</span> <br />
                        Dev Frontend
                    </p>
                    <Link to="/sobre" className='btn btn-red'>
                        Saiba mais
                    </Link>
                </div>
                <figure>
                    <img className='img-home' src="/developer-red.svg" alt="Imagem de home" />
                </figure>
            </section>
            <Footer />
        </>
    )
}

export default Home