import { useState, Component, useEffect} from "react";
import Search from "./views/Search";
import React from "react";


//function App() { // componente funcional, que es diferente al componente de clases 
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({target : { value }})=> setEmail(value); //target es un objeto dentro de la app 
  const handlePasswordChange = ({target : { value }}) => setPassword(value);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`)
  };
  console.log(email);
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo
          <input type = "email" value = {email} onChange={handleEmailChange}/>
        </label>
        <label>
          Contraseña
          <input type = "password" value = {password} onChange={handlePasswordChange}/>
        </label>
        <button>
          Enter
        </button>
      </form>
      
    </div>
  );
  */

  //clase de useState

  /*
  const [name, setName] = useState("");
  const [age] = useState(); //un useState puede recibir un arreglo, objeto, arreglo de objeto, numero, etc.
  const [,setSometing] = useState("hey!");

  const handleHeyClick =()=>{
    setName("Jose");
  };

  return(
    <div className = "App">
      <h2>Hola {name}</h2>
      <p>{age}</p>
      <button onClick={handleHeyClick}>Hey</button>
    </div>

  );
  }
  */

  /*class App extends Component {
    constructor(props){
      super(props)
      console.log("constructor");
      this.state = {
        name : "",
      }
    }
    componentDidMount(){
      console.log("did Mount");
    }

    componentDidUpdate(){ // este metodo nos avisa cada ves que se actualiza el componente
      console.log("did update");
    }

    shouldComponentUpdate(){ // este metodo no deja actulizar, no permite que se siga renderizando
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){ // aca entrega se entrega el valor anterior.
      //console.log(prevProps,prevState);
      console.log("getSnapshotBeforeUpdate");
    }
    render() {
      return(
      <div>
        <input value ={this.state.name} onChange={({target : {value}}) => this.setState({name:value})}></input>
      </div>);
    }
  }
  */

  /*const App = () =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    //componentDidUpdate
    useEffect(() => { // siempre que exista un renderizado se entrara a este useEffect
      console.log("didUpdate Effect");
    });
    //componentDidMount
    useEffect(() => {
      console.log("componen DidMount");
      //return () => {
        //console.log("willUnmount");
      //}
    }, []);

    useEffect(()=> { // si alguna de estas 2 dependencias cambian(age o name) entra a este efecto.
      console.log("name o age cambio")
    }, [name,age]);

    return (
      <div>
        <input value = {name} onChange = {({ target: {value}}) => setName(value)}/>
        <br>
        </br>
        <br>
        </br>
        <input age={age} onChange = {({target : {value}}) => setAge(value)}></input>
      </div>
    );
  }
*/ //{isLogged ? <h2>Logeado Exitosamente</h2> : undefined} // se pueden agregar componente dentro de la condicion que nos pueda
    //                                                         realizar cualquier tipo de cosas, entregar un video..etc
  //RENDERIZADO CONDICIONAL
 /* const App = () =>{
    const [user, setUser] = useState("");
    const [password, setPassword] = useState();
    const [isLogged,setIsLogged] = useState(false);

    const handleLoginClick = () => {
      setIsLogged(true)
    };

    return(
      <div>
        <label>
          Usuario
          <input value = {user} onChange={ ({target: {value}}) => setUser(value) }></input>
        </label>
        <br />
        <br />
        <label>
          Password
          <input type = "password" value = {password} onChange={({target : {value}}) =>setPassword(value)}></input>
        </label>
        <br />
        <br />
        <button onClick={handleLoginClick}>Iniciar Sesion</button> 
        {isLogged && <h2>Logeado Exitosamente</h2> } 
      </div>
    );
  }
  */
  
  /*const jsonData = [{
    key: "1",
    name : "juan"
  } , {
    key : "2",
    name :"Valentina"
  } , {
    key : "3",
    name :"Andres"
  } , {
    key : "4",
    name :"Pedro"
  }];
  //como se muestra los json, recorriendo el arreglo con map
  const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    },[]);
    /*if(isLoading){
      return (
        <h2>Is Loading...</h2>
      );
    }
    const renderData = () => {
       return jsonData?.map((value) => (
        <div key={value.key}>
          <p>{value.name}</p>
        </div>   
       ));
    };
    return(
      <div>
        {isLoading ? <h2>Is Loading,..,.,.</h2> : renderData()}
      </div>
    );
  }
  */

  /*import {  } from "./views/Search";

  const App = () =>  <Search /> 
export default App;
*/

// Aprendiendo React Router
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemsDetails from './ItemsDetails';

function App() {
  return (
    <Router>
      <div className = "App">
      <Nav />
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path = "/about" component={About}/>
          <Route path = "/shop" exact component={Shop}/>
          <Route path ="/shop/:id" component={ItemsDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home =() => (
  <div>
    <h3>Home page</h3>
  </div>
);

export default App;
