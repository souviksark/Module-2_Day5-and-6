//moduleJS
import "./App.css"
import SamsungImg from "./Assets/Images/sm-img.jpg"

function App(){
  return(
    <div>
      <h1 className="App">Hello world</h1>
      {/* which ever tag you open you need to close */}
      {/* img,hr,br,input
      url approach, 
      static image in machine */}
      <p> this is a paragraph </p>
      <br/>
      <hr/>
      <p> this is a paragraph </p>
      <h1>
        This is form
      </h1>
      <label>Enter name</label>
        <input type='text' />
      <hr/>
      <hr/>
      <img  width='100%' src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/42552/article_full%403x.jpg" alt=""/>
      <hr/>
      <hr/>
        <h2>Static image</h2>
      <img width='100%' src={SamsungImg} alt="" />
    </div>
  )
}

export default App