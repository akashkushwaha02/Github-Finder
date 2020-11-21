import React,{ Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => <React.Fragment>
            <img src={spinner} alt="Loading..." style={{ width: '200px', margin:'auto', Display: 'block'}}></img>
        </React.Fragment>

export default Spinner;