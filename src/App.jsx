import Header from "./components/Header"
import Products from "./components/Products"
import Footer from "./components/Footer"
import Provider from "./context/Provider"
import Cart from "./components/Cart"

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Footer />
      <Cart />
    </Provider>
  )
}

export default App
