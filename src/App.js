import  { Component }  from "react";
import './App.css'

class App extends Component {

    state = {
     nomes: [],
     TodosNomes: [],
     evento: [],

 };
 componentDidMount() {
   fetch('https://digimon-api.vercel.app/api/digimon')
       .then(res => res.json())
       .then(res => {
         this.setState({
           nomes: res,
       });
       });
};

 resultFiltro(event){
    
     return(
      this.setState({
        evento: event
    })
         )        
  }; 
  resultFinal(){
    const { nomes, evento } = this.state
  
    return(
    nomes.filter(Tnome => Tnome.name.includes(evento))
    .map(nome => (
      <div >
       <p key={nome}>
          <p>{nome.name}</p>
          <p><img src={nome.img} alt=""></img> </p>
          <p>Nível: {nome.level}</p>
        </p> 
      </div>
  ))  )
  }
  render(){
    
    return(    
      <div className="App">
      <h1> Lista de digimons</h1>
      <input 
      type="text" 
      placeholder="Digite..." 
      onChange={(event) => {
        this.resultFiltro(event.target.value)
      }}
      />
      {
      this.resultFinal()
      }
      </div>
        
     );
  };
};
     


export default App;
