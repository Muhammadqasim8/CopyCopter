import React from 'react'
import Header from './components/Header'
import Automate from './components/Automate'
import CardContainer from './components/CardContainer'
import Usecase from './components/Usecase'
import CardVid from './components/CardVid'
import Step from './components/Step'
import Features from './components/Features'

const App = () => {
  return (
    <div>
      <Header />
      <Automate />
      <CardContainer />
      <Usecase />
      <Step />
      <Features/>
    </div>
  )
}

export default App
