import  { Component }  from "react";
import api from './api'
import './App.css'

class App extends Component {

  state = {
    nomes:[],
  }

  async componentDidMount(){
    const response = await api.get('');
    console.log(response.data)

    this.setState({ nomes: response.data});
  }

  render(){

    const { nomes } = this.state

    return(
      <div className="main">
        <h1> Lista de digimons</h1>
            {nomes.map(nome => (
            <div >
             <p key={nome}>
                <p>{nome.name}</p>
                <p><img src={nome.img} alt=""></img> </p>
                <p>Nível: {nome.level}</p>
              </p> 
            </div>
        ))}      
      </div>  
     );
  };
};

export default App;
