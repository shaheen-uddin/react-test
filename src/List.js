import React, {useState, useEffect} from 'react'
import axios from 'axios'


function List(){
    const [items, setItems] = useState([])

    useEffect(()=>{
    	axios.get('https://localhost:5001/api/todoitem')
    	     .then(res => {
                setItems(res.data)
    	     	//console.log(data)
    	     })
    	     .catch(err => console.log(err))
    })

    function handleClick(){
    	console.log(items)
    	alert('working')
    }

	return (
			<div>
			   <ul>
				<button onClick={handleClick}>Show worklist</button>
				{
					items.map(item => <li key={item.id}>{item.name}</li> )
				}
               </ul>
			</div>
		)
}

export default List