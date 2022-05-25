import React from 'react'

function Home(props) {
  return (
    <div>       
     {/* <h1>{props.name}</h1>
    <h1>{props.ID}</h1>   */}  
   <h1>PropertiesExample</h1>
   
    <ul>
        {props.list.map(templist=>
            (
                <li key={templist}>{templist}</li>
            ))}

           
    </ul>
    </div>
  );
}

export default Home;
