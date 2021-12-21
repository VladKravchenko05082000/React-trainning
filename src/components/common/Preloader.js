import React from 'react';
import preLoader from "../../assets/loading.gif"

const Preloader = () => {
   return (<div>
      {<img src={preLoader} alt='preloader' />}
   </div>)
}

export default Preloader