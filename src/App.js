import React,{Component} from 'react'
import CardList from './Components/CardList'
import { robots } from './Components/Robots';
import SearchBox from './Components/SearchBox'
import Scroll from './Components/Scroll';
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange=(e)=>{
        this.setState({searchfield: e.target.value})
    }
  render(){
    const filterRobots = this.state.robots.filter(robots=>{return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
    return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll><CardList robots={filterRobots}/></Scroll>
        </div>
      )
  }
}

export default App
