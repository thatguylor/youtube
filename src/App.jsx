/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import ProductList from './components/productList/ProductList'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'
import ResumeList from './components/resume/Resume'

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white'
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ResumeList />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App
