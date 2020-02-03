import React, { Component } from 'react';
import axios from 'axios';
class Creat extends Component {
constructor(props){
super(props);
this.state={   
    
         
     title: "English12Exam11",
     theQuestion:[
            {  theQuestion: "Mommmed ",
                first_Option: " Exellent",
                sec_Option: "hhh good",
                thrid_Option: " Hinotnb,bvbvcx7778865 bad",
                forth_Option: " fantistatic ",
                correct_answer: "good"
            },{  theQuestion: "How ggold are you ",
            first_Option: " 32Exellent",
            sec_Option: "12",
            thrid_Option: " Hinot bad",
            forth_Option: " fantistatic ",
            correct_answer: "good"
        },{  theQuestion: "How ggold are you ",
        first_Option: " 32Exellent",
        sec_Option: "12",
        thrid_Option: " Hinot bad",
        forth_Option: " fantistatic ",
        correct_answer: "good"
    } ,{  theQuestion: "How ggold are you ",
    first_Option: " 32Exellent",
    sec_Option: "12",
    thrid_Option: " Hinot bad",
    forth_Option: " fantistatic ",
    correct_answer: "good"
}]
}
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

axios.put('http://localhost:3001/Exam/api/exams/5e3818677593593724856c96',{theQuestion})
    
.then(res=>{
 console.log(res.data)
// console.log(updetate)

});

//delet  
// axios.delete('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
// .then(res=>{
//  console.log(res.data)
// console.log(updetate)

// });

axios.get('http://localhost:3001/Exam/api/exams/5e3818677593593724856c96')
    
    .then(res=>{
     console.log(res.data)
    
    
    });

 

    
    }

render(){





return(

<div> 


<div>  
<form>
Enter name of Exam   
    <input type="text" onChange={ this.hanleEaxm1}/>
     
    </form>
    </div>

<form onSubmit={this.handleSubmit}>
 <ul>
  
    <li>
    Enter  Question
    </li>
  
    <input type="text"  onChange={ this.hanleNumber2}/>
    <li>
Enter first_Option
    <input type="text"  onChange={ this.hanleNumber2}/>
</li>
<li>
    Enter  sec_Option

    <input type="text"  onChange={ this.hanleNumber2}/>
    </li>
    <li>
    Enter thrid_Option

    <input type="text"  onChange={ this.hanleNumber2}/>
    </li>
    <li>
    Enter forth_Option
  <input type="text"  onChange={ this.hanleNumber2}/>
  </li>
  <li>
   Enter correct_answer
  <input type="text"  onChange={ this.hanleNumber2}/>
  </li>
  </ul>
     </form>


 </div>




)




}




}

export default Creat;