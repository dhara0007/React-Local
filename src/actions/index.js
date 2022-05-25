export const incNumber=()=>
{
    return{
        type:"INC"
    }
}

export const decNumber=()=>
{
    return{
        type:"DEC"
    }
}
export const inceNumber=(num)=>
{
    return{
        type:"INCE",
        payload:num
    }
}

export const deceNumber=(num)=>
{
    return{
        type:"DECE",
        payload:num
    }
}
