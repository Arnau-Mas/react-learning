/* ÉS COM L'App.vue, EL COMPONENT QUE S'ESTÀ RENDERITZANT A L'HTML I ON CUINES TOTA L'APLICACIÓ CREC. SI ANEM A L'INDEX.JS, VEIEM COM PÀSSA L'APP.JS A DINS DEL DOM, EL RENDERITZA ALLÀ. */

import './App.css';
import Header from './Header'; //importem el component x utilitzar-lo aqui
import Missatge from './Missatge' /* importem el component x passar-li props */

/* els components a React es creen a través de funcions, crees la funcio amb el nom del component i retornes el codi html que vols. Realment no és html, és JSX(JavaScript), que després Babel transforma en javascript pur en plan react.createElement("div"),etc, etc, etc però React ho simula pq puguis posar html normal. */

function NavBar(){
  return (
    <nav>
      <ul>
        <li>contacts</li>
        <li>products</li>
        <li>profile</li>
      </ul>
    </nav>
  )
}

/* Per pintar un component dins d'un altre és igual que a Vue. */
function App() {
  let message = "Hola Mundo desde variable"
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <h1>Fent el component App</h1>
      <p>Pintant variable:  {message + ' / ficat directament al JSX'}</p>
      <Missatge message="Pintant missatge a través de props" altreMessage="altre missatge" />
    </div>
  );
}

export default App;
