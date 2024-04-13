import React,{useState, useEffect} from 'react'
import CardList from './Components/CardList'
import SearchBox from './Components/SearchBox'
import Scroll from './Components/Scroll';
import './App.css';
import {robots} from './Components/Robots';

function App() {

const [id,setID]=useState(robots.length+1);
  const [searchfield, setSearchfield] = useState('')
  const [friend,setFriend] = useState({name:'',email:'',id:id})

  const onSearchChange=(e)=>{
    setSearchfield(e.target.value)
  }

  const onsubmit=(e)=>{  
    robots.push(friend);
    setID(robots.length+1);
    setFriend({name:'',email:'',id:id})
  }

  useEffect(()=>{
  
  },[id]);

  const filterRobots = robots.filter(robot=>{return robot.name.toLowerCase().includes(searchfield.toLowerCase())})
  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <div>
        <input className='pa3 ba ma2 b--green bg-lightest-blue br3' type="text" value={friend.name} placeholder="Name" onChange={(e)=>{setFriend({...friend,name:e.target.value})}}/>
        <input className='pa3 ma2 ba b--green bg-lightest-blue br3' type="email" value={friend.email} placeholder='E-mail Address' onChange={(e)=>{setFriend({...friend,email:e.target.value})}}/>
        <button onClick={onsubmit} className='pa3 ma2 ba bg-lightest-blue br4 pointer grow hover-white hover-bg-black' type='submit'>Add Friend</button>
      </div>
      <Scroll><CardList robot={filterRobots}/></Scroll>
    </div>
  )  
}

export default App
