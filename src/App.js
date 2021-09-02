import './App.css';
import {database} from './firebase';
import {useEffect,useState} from 'react'
import Header from './Header';
import {myAuth} from './firebase';

function App() {
  
  const [usuario, setUset] = useState();

  useEffect(
    ()=>{

      myAuth.onAuthStateChanged(function(val){
        setUset(val.displayName);
      })

    },[]
  )

  /**/
  return (
    <div className="App">
      <Header variavel_usuario ={setUset} usuario = {usuario} ></Header>
    </div>
  );
}

export default App;
