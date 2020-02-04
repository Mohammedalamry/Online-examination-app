import React, { Component } from 'react';
import axios from 'axios';
class Usersing extends Component {
constructor(props){
super(props);
this.state={   
 usersin: "u",
      
}
}

//   

handlExamname(e){
this.setState( {title: e.target.value})


}

handlExamQutsions(e){
    const title = this.state.title;
    const theQuestion =this.state.theQuestion;
    let updetate = this.state.theQuestion

    this.setState(   {  theQuestion: "Mommmed ",
    first_Option: " Exellent",
    sec_Option: "hhh good",
    thrid_Option: " Hinotnb,bvbvcx7778865 bad",
    forth_Option: " fantistatic ",
    correct_answer: "good"
});
    axios.post('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
      .then(res=>{
     console.log(res.data)
      });




}
//this statment to push element into arry 
handleSubmit(e){                
  

    this.setState({results:this.state.number1+this.state.number2});
  
    e.preventDefault();

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

 
 const title = this.state.title;
 const theQuestion =this.state.theQuestion;
 let updetate = this.state.theQuestion
//  axios.post('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
// .then(res=>{
//  console.log(res.data)
// });
//put
}
render(){        
return(
    <div>        </div>

)

}
}  export default Usersing;