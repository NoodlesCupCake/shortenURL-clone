import './App.css'
import Cards from './components/cards/cards'
import ContentCreateAccount from './components/content-input/content-createaccount'
import ContentInput from './components/content-input/content-input'
import Header from './components/header/header'
import Paragraph from './components/paragraph/paragraph'

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <ContentInput/>
        <ContentCreateAccount/>
        <Paragraph/>
        <Cards/>
      </div>
    </>
  )
}

export default App
