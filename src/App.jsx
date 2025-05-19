import React from 'react'
import User from './component/User'
import Article from './component/Article'

const App = () => {
  return (
    <div className='App'>
      <header>
        <h1>header section</h1>
      </header>
      <div className='content'>
        <Article/>
        <User/>
      </div>
      
    </div>
  )
}

export default App
