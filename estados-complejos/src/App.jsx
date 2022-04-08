import { useState } from 'react'
import './App.css'

function App() {
  /* Esto es un ejercicio simplemente para entender estados complejos*/

  /* Creem un objecte que contingui totes les dades */
  const [counters, setCounters] = useState({
    counterLeft:0,
    counterRight:0,
    numberOfClicks:0
  })

  const [arrayClicks, setArrayClicks] = useState([]);

  function clickLeft(){
    //al setejar, SEMPRE hem de machacar. No podem mutar/canviar dades anteriors, pq react es torna boig.
    setCounters({ 
      ...counters,
      counterLeft:counters.counterLeft+1,
      numberOfClicks:counters.numberOfClicks+1
    })
    //A dalt fem spread operator per fer una còpia de les anteriors dades aqui, i un cop feta la copia, abaix tornem a reassignar el valor (ara sí, de les dades ja copiades, x lo que podem reassignar). L'spread operator també ens permet copiar les dades que no varien, per exemple el counterRight.
    
    
    setArrayClicks([...arrayClicks, 'L']) //fem spread operator per tenir els anteriors valors i el nou. També es pot fer amb el prev, setArrayClicks(prev => [...prev, 'L']). No es pot fer arrayClicks.push('l') perquè el valor que li estariem passant es el return d'arrayClicks.push que seria el length de l'array.
  }

  function clickRight(){
    setCounters({ 
      ...counters,
      counterRight:counters.counterRight+1,
      numberOfClicks:counters.numberOfClicks+1 //Aquest és prescindible pq ja tens l'estat arrayClicks
    })
    /* Lo de dalt amb prevCounters seria:
    setCounters(prevCounters => {
      return({ 
        ...prevCounters,
        counterRight:counters.counterRight+1,
        numberOfClicks:counters.numberOfClicks+1
      })
    }) */
    setArrayClicks([...arrayClicks, 'R'])
  }

  return (
    <div className="App">
      <div className='divCounters'>
        <p>{counters.counterLeft}</p>
        <button onClick={clickLeft}>Left</button>
        <button onClick={clickRight}>Right</button>
        <p>{counters.counterRight}</p>
      </div>
      <p>Clicks: {counters.numberOfClicks} /  Prescindible pq ja tenim l'estat d'abaix</p>
      <p>ClicksArray:{arrayClicks.length}</p>
    </div>
  )
}

export default App
