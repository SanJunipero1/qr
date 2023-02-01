import './App.css'
import qr from './assets/image-qr-code.png'
function App() {


  return (
    <div className='qrcode'>
      <div className='qrinside'>
        <div className='imagecontainer'>
      <img className='image' src={qr}/>
      <h2 className='improve'>Improve your front-end <br></br>skills by building projects</h2>
      <p>Scan the QR code to visit Frontend<br></br>Mentor and take your coding skills to<br></br>the next level</p>
      </div>
     
      </div>
    </div>
  )
}

export default App


