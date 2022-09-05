import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Title titleText="Title"/>
        <ButtonComponent label="This is a Test Button"/>
        <ImageComponent alt="meta logo" xSize="100px" ySize="100px" src="https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157871.jpg?w=826&t=st=1662375809~exp=1662376409~hmac=cde262ffe5736ed6bbb9e9796a60d827da6601ab300a70bbc71dff9a520928ad"/>
        
      </header>
    </div>
  );
}

export default App;
