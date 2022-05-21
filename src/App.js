import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [isLanding, setLanding] = useState(true);
  const [recipeName, setRecipeName] = useState("");
  const [recipeIns, setrecipeIns] = useState("");
  const handleSubmit = (evt) =>{
    console.log(evt.target)
    setLanding(false);
  }
  useEffect(() => {
  if(localStorage.getItem('rn') && localStorage.getItem('rs')) {
    setRecipeName(localStorage.getItem('rn'));
    setrecipeIns(localStorage.getItem('rs'));
  }
}, []);
  if(isLanding){

      return (
    
        <div>
          <h1 className="doNotRemoveMe">Hello world.</h1>
          {/* ^ Do not remove this element ^ */}
       {recipeName.trim() === ""? 
         <h1>My Recipes There are no recipes to list</h1>

       :
       <div>
         <h1>My Recipes {recipeName}</h1>

       <li>{recipeIns}</li>
       </div>
       }
         <button onClick={(e) => setLanding(false)} >Add Recipe</button>

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
  recipe-name:
      <input type="text" name="recipe-name" onBlur={(e) => setRecipeName(localStorage.setItem('rn',e.target.value))} />
    </label>
    <label>
    recipe-instructions:
      <input type="text" name="recipe-instructions" onChange={(e) => setrecipeIns(localStorage.setItem('rs',e.target.value))} />
    </label>

    <input type="submit" value="Submit" onSubmit={(e) => setLanding(false)}/>
  </form>
        </div>
    );
  }

}

export default App;
