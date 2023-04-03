import React from "react";
import Buscar from "./Buscar";
import Pagination from "./Pagination";

const Characters = ({ info,setBuscrar,pageNumber,setpageNumber,characters, setCharacters }) => {
  // método para limpar o estado
  const clearState = () => {
    setCharacters(null);
  };



  return (
    <>
      <h1>Characters</h1>
      <span className="back-home" onClick={clearState}>
        Voltar ao Inicio
      </span>
      <br /><br />      
      <Buscar  setBuscrar={setBuscrar} setpageNumber={setpageNumber}/>
      
        {          
        // faz um if ternário para mostrar uma mensagem quando não há caracteres
          characters=="There is nothing here"
          ? (
          //mostra a mensagem centralizada na tela 
          
            <div className="alert alert-info px-5 mt-2 " role="alert">
              <h6>Não existe esse personagem</h6>
            </div>                     
         
          ) : ( 
      <div className="container-characters">
        {
        characters.map((character, index) => (
          
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    {character.status}
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    {character.status}
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodio:</span>
                <span className="text-grey">{character.episode.length}</span>
              </p>

              <p>
                <span className="text-grey">Espécies:</span>
                <span className="text-grey">{character.species}</span>
              </p>
            </div>
          </div>
        )
        )
                }
      </div>
      )}

      <div>
      <Pagination info={info} pageNumber={pageNumber} setpageNumber={setpageNumber}/>
      </div>

      

      <span className="back-home" onClick={clearState}>
      Voltar ao início
      </span>
    </>
  );
};

export default Characters;
