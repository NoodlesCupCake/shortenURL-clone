import './App.css'
import ContentCreateAccount from './components/content-input/content-createaccount'
import ContentInput from './components/content-input/content-input'
import Header from './components/header/header'

function App() {
  return (
    <div id="wholepage">
      <Header/>
      <div className="container">
        <ContentInput/>
        <ContentCreateAccount/>
      </div>
    </div>
  )
}

export default App
