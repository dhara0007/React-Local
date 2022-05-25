const initState=0;

const changeTheNumbers=(state=initState, action)=>
{
    switch(action.type)
    {
   
    case "INCE" : return state + action.payload;
    case "DECE" : return state - action.payload;
    default: return state;
    }
}

export default changeTheNumbers;