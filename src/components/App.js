import React from 'react';
import "./App.css"

class App extends React.Component {
    render(){
        return(
<div>
     <h1>Calculadora</h1>
     <form>
       <input type="text" />
     </form>

     <div>
       <button>Clear</button>
       <button>C</button>
       <button>/</button>
       <button>Modulo</button>
       <button>+/_</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button></button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button></button>
       <button>1</button>
       <button>2</button>
       <button>3</button>
       <button>+</button>
       <button>0</button>
       <button>.</button>
       <button>=</button>

     </div>

   </div>
        )
    }
}

export default App;