import React,{useState} from 'react'


export const AppContext = React.createContext()

export const AppProvider = (props)=>{
    console.log(props);
    const [count, setcount] = useState(0);
    return (
        <AppContext.Provider value={{count,setcount}}>
            {props.children}
        </AppContext.Provider>
    )
}
