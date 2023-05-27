import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Card from './component/Card/Card'
import SideCard from './component/SideCard/SideCard'
import Question from './component/Question/Question'
import Footer from './component/Footer/Footer'


function App() {
  const [readingTime, setReadingTime] = useState(0)

  const [bookMarkItems, setBookMarkItems] = useState([])
  return (
    <div className="App">

      <div className="header-section">
        <Header></Header>
      </div>

      <div className="max-w-[1200px] mx-auto rounded-md mt-6 md:grid md:grid-cols-3 gap-4">
        <Card readingTime={readingTime} setReadingTime={setReadingTime} bookMarkItems={bookMarkItems} setBookMarkItems={setBookMarkItems}></Card>
        <SideCard readingTime={readingTime} bookMarkItems={bookMarkItems}></SideCard>
      </div>

      <Question></Question>

      <div className="mt-10">
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App;