import './App.css'
import Header from './header'
import react from '../assets/react.svg'
import AppContent from './AppContent'

function App() {

  return (
    <>
      <Header pageTitle="Frontend Authenticated with JWT" logoSrc={react} />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <AppContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
