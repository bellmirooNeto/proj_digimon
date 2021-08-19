/*import { useState } from "react";

function Ap(){
  const [searchTerm, SetSearchTerm] = useState("");
  return(
    <div className="App">
        <h1> Lista de digimons</h1>
        <input type="text" placeholder="Digite..." 
        onChange={(event) => {
          searchTerm(event.target.value)
        }}>
          {this.state.nomes.filter((val)=> {
            if(SetSearchTerm === "") {
              return val
            } else if (val.name.toLowerCas().includes(SetSearchTerm.toLowerCase())){

            }
          }).map((val, key) => {
            return (
              <div className="user" key={key}>
                <p>{val.name} </p>
              </div>
            )
          })}
        </input>
           
      </div>  
     );
  };


export default Ap;
 
{this.state.nomes.filter((val)=> {
  if(this.state.nomes === "") {
    return val
  } else if (val.name.toLowerCase().includes(this.state.nomes.toString().toLowerCase())){
    return (
      <div>
        {console.log()}
      </div>  
    )
  }
}).map((val, key) => {
  return(
  <div className="User" key={key}>
        <p>{val.name}</p>
        <p><img src={val.img} alt=""></img> </p>
        <p>Nível: {val.level}</p>             
    </div>
    );
} )}      
</div>   */