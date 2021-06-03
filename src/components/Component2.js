import React,{useContext} from 'react';
import Component3 from './Component3';
import {AppContext} from '../Context'


const Component2 = () => {
    const state = useContext(AppContext)
    return (
        <div>
            component 2 {state.count++}
            <Component3/>
        </div>
    );
}

export default Component2;
