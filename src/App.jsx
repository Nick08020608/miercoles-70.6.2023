import Message from "./componente/Message"
import Counter from "./componente/Counter"
import Header from "./componente/Header"
import Footer from "./componente/Footer"
import Main from "./componente/Main"


function App() {

  return (
    <>
      <h1>Hola</h1>
      <Message text="Desde un boton"/>
      <Counter/>
      <Header/>
      <Footer/>
      <Main/>
    </>
  )
}

export default App