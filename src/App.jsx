import Header from "./components/Header"
import Products from "./components/Products"
import Footer from "./components/Footer"
import Provider from "./context/Provider"

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Footer />
    </Provider>
  )
}

export default App
