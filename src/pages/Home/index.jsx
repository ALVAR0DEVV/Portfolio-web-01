import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
                    <button className='btn btn-red'>
                        Saiba mais e mais um pouco sobre mim
                    </button>
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