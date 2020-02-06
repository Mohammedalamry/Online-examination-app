import React, { Component } from 'react';
import axios from 'axios';
class Usersing extends Component {
constructor(props){
super(props);
this.state={
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

// handlExamQutsions(e){
//     const title = this.state.title;
//     const theQuestion =this.state.theQuestion;
//     let updetate = this.state.theQuestion

//     this.setState(   {  theQuestion: "Mommmed ",
//     first_Option: " Exellent",
//     sec_Option: "hhh good",
//     thrid_Option: " Hinotnb,bvbvcx7778865 bad",
//     forth_Option: " fantistatic ",
//     correct_answer: "good"
// });
//     axios.post('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
//       .then(res=>{
//      console.log(res.data)
//       });




// }
//this statment to push element into arry 
handleSubmit(e){                
  
// this.setState({ first_name:e.target.value , last_name:e.target.value })
//     axios.post('http://localhost:3001/User/api/users')
    
//     .then(res=>{
//    console.log("hi")
//     });
axios({
    method: 'post',
    url:'http://localhost:3001/User/api/users',
      
    data: {

        first_name: this.state.first_name,
        last_name:  this.state.last_name
    }
  });
}
 

 
componentDidMount() {   
    // //find alll Exams 
    // axios.get('http://localhost:3001/Exam/api/exams')
    
    // .then(res=>{
    //  console.log(res.data)
    
    
    // });
//findbyone
// axios.get('http://localhost:3001/Exam/api/exams/5e37c6415fce7404f407d18d')
    
//     .then(res=>{
//      console.log(res.data)
    
    
//     });
// //


//post  


//  axios.post('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
// .then(res=>{
//  console.log(res.data)
// });
//put
}
render(){        
return(
    <div>   
    <form>
    <label >Enter your first name </label> 
    <input type="text" onChange={this.handlfristname} />
    <label >Enter your last name </label> 
    <input type="text" onChange={this.handllasttname}/>
    <button onClick={(event)=>this.handleSubmit(event)}>submit</button>

    </form>
    </div>     

)

}
}  export default Usersing;