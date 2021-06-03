import React,{useContext} from 'react';
import Component2 from './Component2';
import {AppContext} from '../Context'

const Component1 = () => {
    const state = useContext(AppContext)
    console.log(state);
    return (
        <div>
            component1 {state.count}
            <Component2/>
        </div>
    );
}

export default Component1;
