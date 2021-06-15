import React ,{useState}from 'react';
import logo from './logo.svg';
import './App.css';

/* const[numbers,setnumbers]=useState([1,2,3,4,5,6,7,8,9,0])
  const nlist=numbers.map((number)=>{
	  return <h1>{number}</h1>
  })
  const[namelist,setnamelist]=useState(['java','c','python'])
  const nlist1=namelist.map((name)=>{
	  return <h1>{name}</h1>
	})
	const [players,setplayers]=useState([{name:'sachin',country:"India"},{name:'Dhoni',country:"India"},{name:'Warner',country:"Australia"}])
	const nlist2=players.map((player)=>{
		return <div>
			<h1>Player is{player.name}</h1>
	<p>Country is {player.country}</p>
		</div>
	})*/
function App() {
 	return (
    <div className="App">
		nlist1 
		<h1> Conditional Rendering</h1>
		{
			(
				
					()=>{
						if(true)
						{
							return <h1>If condition</h1>
						}
					}

				
			)()
		}
	</div>
  );
}
export default App;
