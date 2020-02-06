import React, { Component } from 'react';
import axios from 'axios';
import Test from './Components/test'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
  } from 'react-router-dom';
class Usersing extends Component {
constructor(props){
super(props);
this.state={
    allUsers: []
   
    
}



}





 

 
componentDidMount() {   
    //find alll users 
    axios.get('http://localhost:3001/User/api/users')
    
    .then(res=>{
        console.log(res.data)
        for(let i=0;i<res.data.length;i++){
      
            this.setState({allUsers: this.state.allUsers.concat(res.data[i]) })
      
            }  }     )
    
    




}
handleDelete = (id)=>{
   // delet  
axios.delete(`http://localhost:3001/User/api/users/${id}`)
    
.then(res=>{
 console.log(res.data)

});

}
render(){  
    console.log(this.state.allUsers)      
return(
    <div>
    <table>
  {this.state.allUsers.map(item=> (  
    <tr>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td><button onClick={()=>this.handleDelete(item._id)}>Delete</button></td>
        <Link to={`update/${item._id}`}>
        <td><button>Edit</button></td>
      </Link>

    </tr>
    
))}      
</table>
</div>     

)

}
}  export default Usersing;