import '../styles/home.css'
import Bgvideo from '../pages/bgvideo'

export default function Home() {
  return (
    <div className='content'>
      <Bgvideo />
      <div className='textcontainer'>
        <h1> Fiuke - Pyörä juuri sinulle</h1>
        <p id="homeFront">Laadukas polkupyörien nettikauppa</p>
      </div>
    </div>
  )
}