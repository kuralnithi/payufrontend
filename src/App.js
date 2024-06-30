import axios from 'axios';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import PayUform from './payUform';
import Success from './success';
import Failure from './failure';

const App = () => {
return(
<><Routes>

<Route path='/' element={<PayUform/>}/>
<Route path='/failure' element={<Failure/>}/>
<Route path='/success' element={<Success/>}/>

</Routes>
</>

)
};

export default App;
