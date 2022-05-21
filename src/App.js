import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [isLanding, setLanding] = React.useState(true);
  const [recipeName, setRecipeName] = React.useState("");
  const [recipeIns, setrecipeIns] = React.useState("");
  const handleSubmit = (evt) =>{
    console.log(evt.target)
    setLanding(false);
  }
  useEffect(() => {
  if(localStorage.getItem('rn')) {
    setRecipeName(localStorage.getItem('rn'));
  }
}, []);
  if(isLanding){

      return (
    
        <div>
          <h1 className="doNotRemoveMe">Hello world.</h1>
          {/* ^ Do not remove this element ^ */}
         <h1>My Recipes</h1>
         <button onClick={(e) => setLanding(false)} >Add Recipe</button>
       {recipeName.trim() === ""? 
                <h2>There are no recipes to list</h2>

       :
       <li>{recipeName}</li>
       }
        </div>
      );
    
      
  
    
  }else{
    return (
    
      <div>
        <h1 className="doNotRemoveMe">Hello world.</h1>
        {/* ^ Do not remove this element ^ */}
       <h1>My Recipes</h1>
       <form onSubmit={handleSubmit}  >
  <label>
    Recipe Name:
      <input type="text" name="recipe-name" onBlur={(e) => setRecipeName(localStorage.setItem('rn',e.target.value))} />
    </label>
    <label>
    Recipe instructions:
      <input type="text" name="recipe-instructions" onChange={(e) => setrecipeIns(e.target.value)} />
    </label>

    <input type="submit" value="Submit" onSubmit={(e) => setLanding(false)}/>
  </form>
        </div>
    );
  }

}

export default App;
