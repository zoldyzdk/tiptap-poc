import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tiptap from './components/Tiptap'
import Alguma from './components/Alguma'
import Btn from './components/Btn'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Btn />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Tiptap />
      </div>
      <Alguma />
    </>
  )
}

export default App
