import React from 'react'
import logo from './logo.svg'
import './App.css'

type AppProps = {
  item: string
}

function App(props: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>item name: {props.item}</h1>
      </header>
    </div>
  )
}

export default App
