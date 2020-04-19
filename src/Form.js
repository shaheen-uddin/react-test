import React, { useState, useEffect } from 'react'
import axios from 'axios'



function Form(){

    const [data, setData] = useState({name: '', isComplete: false });
   // const [comp, setComp] = useState('');

function checkHandler(e){

     if(e.target.checked){
      setData({...data, isComplete: true})
     } else {
       setData({...data, isComplete: false})
     }

   console.log("submitted value from checkbox :", data);

}

function submitHadler(e){
  e.preventDefault();
  
    axios.post('https://localhost:5001/api/todoitem', data)
         .then(res => console.log(res))
         .catch(err => console.log(err))
  
  console.log(data);
}

   return (
        <div>
            <form onSubmit={submitHadler}>
                <label>
                      Name :
                </label>
                <input type="text" value={data.name} onChange={ e => setData({...data, name: e.target.value})} /> <br />
                <input type="checkbox" checked={ data.isComplete} onChange={checkHandler} />
                <label>Complete</label> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>

   )

}
export default Form
