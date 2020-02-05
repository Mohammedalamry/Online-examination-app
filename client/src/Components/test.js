import React, { Component } from 'react';
import axios from 'axios';

import { InputGroup, FormControl, Row, Col, Form, Button, Alert } from 'react-bootstrap'

class  Test extends Component {
constructor(props){
super(props);
this.state={
    allUsers: [],
    first_name:'',
    last_name:''
    
}
this.handlfristname = this.handlfristname.bind(this);
this.handllasttname = this.handllasttname.bind(this);



}

//   

  handlfristname(e){
 this.setState( {first_name: e.target.value});
  }
 handllasttname(e){
    this.setState( {last_name: e.target.value})

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

////update usernames
handleSubmit(id){                
  
     
    axios({
        method: 'put',
        url:`http://localhost:3001/User/api/users/${id}`,
         
        data: {
    
            first_name: this.state.first_name,
            last_name:  this.state.last_name
        }
      });
    }
     
    





render(){  
    console.log(this.props.match.params.id)
 return(
    <div>
     
     <form>
    <label >Enter your first name </label> 
    <input type="text" onChange={this.handlfristname} />
    <label >Enter your last name </label> 
    <input type="text" onChange={this.handllasttname}/>
    <button onClick={()=>this.handleSubmit(this.props.match.params.id)}>submit</button>
 


    </form>
 
</div>     

)

}
}  export default Test;







 

 
// componentDidMount() {   
//     //find alll users 
//     axios.get('http://localhost:3001/User/api/users')
    
//     .then(res=>{
//         console.log(res.data)
//         for(let i=0;i<res.data.length;i++){
      
//             this.setState({allUsers: this.state.allUsers.concat(res.data[i]) })
      
//             }  }     )
    
    




// }
// handleDelete = (id)=>{
//    // delet  
// axios.delete(`http://localhost:3001/User/api/users/${id}`)
    
// .then(res=>{
//  console.log(res.data)

// });

// }