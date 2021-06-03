import React,{useContext} from 'react';
import {AppContext} from '../Context'

const Component3 = () => {
    let {count,setcount} = useContext(AppContext)
    return (
        <div>
            count {++count}
            <button onClick={()=>setcount(count+1)}>click</button>
        </div>
    );
}

export default Component3;
