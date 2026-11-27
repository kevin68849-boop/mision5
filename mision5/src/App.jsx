import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Games />
                <Features />
                <Pricing />
            </main>
            <Footer />
        </>
    )
}

export default App
