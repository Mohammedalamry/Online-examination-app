import React, { Component } from 'react';
import axios from 'axios';
class Creat extends Component {
constructor(props){
super(props);
this.state={   
    
         
     title: "English12Exam11",
addtheQuestion:[
            {  theQuestion1: "Mommmed ",
                first_Option: " Exellent",
                sec_Option: "hhh good",
                thrid_Option: " Hinotnb,bvbvcx7778865 bad",
                forth_Option: " fantistatic ",
                correct_answer: "good"
            }],
            theQuestion1: "Mommmed ",
            theQuestion: "Mommmed1111111 ",
            first_Option: " Exellent",
            sec_Option: "hhh good",
            thrid_Option: " Hinotnb,bvbvcx7778865 bad",
            forth_Option: " fantistatic ",
            correct_answer: "good"






}
//this to  invoke method for input value
this.handlExamname = this.handlExamname.bind(this);
this.handltheQuestion = this.handltheQuestion.bind(this);
this.handlFirst_Option = this.handlFirst_Option.bind(this);
this.handlSec_Option= this.handlSec_Option.bind(this);
this.handlthrid_Option = this.handlthrid_Option.bind(this);
this.handlforth_Option = this.handlforth_Option.bind(this);
this.handlCorrect_answer = this.handlCorrect_answer.bind(this);
this.handlQuestions =this.handlQuestions.bind(this);
}


 //handltheQuestioninside array
 handltheQuestion(e){
    this.setState( {theQuestion: e.target.value})
    
    
    }
//handlfirst_Option
handlFirst_Option(e){
    this.setState( {first_Option: e.target.value})
    
    
    }
//handlsec_Option
handlSec_Option(e){
    this.setState( {sec_Option: e.target.value})
    
    
    }
//handlthrid_Option
handlthrid_Option(e){
    this.setState( {thrid_Option: e.target.value})
    
    
    }
//handlforth_Option
handlforth_Option(e){
    this.setState( {forth_Option: e.target.value})
    
    
    }
//handl correct_answer
handlCorrect_answer(e){
    this.setState( {correct_answer: e.target.value})
    
    
    }
//handlaexamname
handlExamname(e){
this.setState( {title: e.target.value})


}
//here to push all quostions
handlQuestions(e){
    this.setState({addtheQuestion: this.state.theQuestion.concat({theQuestion1: this.state.theQuestion1}) })
    this.setState({addtheQuestion: this.state.theQuestion.concat({first_Option:this.state.first_Option}) })
    this.setState({addtheQuestion: this.state.theQuestion.concat({sec_Option:this.state.sec_Option}) })
    this.setState({addtheQuestion: this.state.theQuestion.concat({thrid_Option:this.state.thrid_Option}) })
    this.setState({addtheQuestion: this.state.theQuestion.concat({forth_Option:this.state.forth_Option}) })
    this.setState({addtheQuestion: this.state.theQuestion.concat({correct_answer:this.state.correct_answer}) })
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
    // axios.post('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
    //   .then(res=>{
    //  console.log(res.data)
    //   });




}
//this statment to push element into arry 
// handleSubmit(e){                
  

//     this.setState({results:this.state.number1+this.state.number2});
  
//     e.preventDefault();

// }
 

 
componentDidMount() {   

//    console.log(this.state.theQuestion) 
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
console.log(this.state.addtheQuestion) 


 const title = this.state.title;
 const theQuestion =this.state.theQuestion;
 let updetate = this.state.theQuestion
 
 axios.post('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
.then(res=>{
 console.log(res.data)


});
//put


// axios.put('http://localhost:3001/Exam/api/exams/5e3818677593593724856c96',{title,theQuestion})
// .then(res=>{
//  console.log(res.data)
// // console.log(updetate)

// });



//delet  
// axios.delete('http://localhost:3001/Exam/api/exams',{title,theQuestion})
    
// .then(res=>{
//  console.log(res.data)
// console.log(updetate)

// });

// axios.get('http://localhost:3001/Exam/api/exams/5e3818677593593724856c96')
    
//     .then(res=>{
//      console.log(res.data)
    
    
//     });

    // console.log(this.title.value)

    
    }

render(){


 

return(
  

<div> 


<div className="title">  
    <form>
    Enter name of Exam   
    <input type="text" onChange={this.handlExamname}/>
    <button onClick={(event)=>this.handlQuestions(event)}   >submit</button>

    </form>

    </div>
<div>
 
<form onSubmit={this.handleSubmit}>
 <ul>
  
    <li>
    Enter  Question
    </li>
    <input type="text"  onChange={this.handltheQuestion}/>
    <li>
     Enter first_Option
    <input type="text" onChange={this.handlFirst_Option}/>
   </li>
    <li>
    Enter  sec_Option

    <input type="text" onChange={this.handlSec_Option}/>
    </li>
    <li>
    Enter thrid_Option

    <input type="text" onChange={this.handlthrid_Option}/>
    </li>
    <li>
    Enter forth_Option
  <input type="text"  onChange={this.handlforth_Option} />
  </li>
  <li>
   Enter correct_answer
  <input type="text"  onChange={this.handlCorrect_answer}/>
  </li>
  </ul>
  <button onClick={(event)=>this.handlQuestions(event)}   >submit</button>
     </form>


</div>

 </div>




)




}




}

export default Creat;





// this.state={   
    
         
//     title: "English12Exam11",
//     theQuestion:[
//            {  theQuestion: "Mommmed ",
//                first_Option: " Exellent",
//                sec_Option: "hhh good",
//                thrid_Option: " Hinotnb,bvbvcx7778865 bad",
//                forth_Option: " fantistatic ",
//                correct_answer: "good"
//            },{  theQuestion: "How ggold are you ",
//            first_Option: " 32Exellent",
//            sec_Option: "12",
//            thrid_Option: " Hinot bad",
//            forth_Option: " fantistatic ",
//            correct_answer: "good"
//        },{  theQuestion: "How ggold are you ",
//        first_Option: " 32Exellent",
//        sec_Option: "12",
//        thrid_Option: " Hinot bad",
//        forth_Option: " fantistatic ",
//        correct_answer: "good"
//    } ,{  theQuestion: "How ggold are you ",
//    first_Option: " 32Exellent",
//    sec_Option: "12",
//    thrid_Option: " uuuuuu bad",
//    forth_Option: " fantistatic ",
//    correct_answer: "good"
// }]
// }
// }



// // {/* <div>
 
//  <form onSubmit={this.handleSubmit}>
//   <ul>
   
//      <li>
//      Enter  Question
//      </li>
//      <input type="text"  ref={Qs=>this.first_Option=Qs}/>
//      <li>
//       Enter first_Option
//      <input type="text" ref={op=>this.first_Option=op }/>
//     </li>
//      <li>
//      Enter  sec_Option
 
//      <input type="text" ref={op=>this.sec_Option=op }/>
//      </li>
//      <li>
//      Enter thrid_Option
 
//      <input type="text"  ref={op=>this.thrid_Option=op }/>
//      </li>
//      <li>
//      Enter forth_Option
//    <input type="text"  ref={op=>this.forth_Option=op }/>
//    </li>
//    <li>
//     Enter correct_answer
//    <input type="text"  ref={op=>this.correct_answer=op }/>
//    </li>
//    </ul>
//       </form>
//  <button>submit</button>
 
//  </div>
 
//   </div>
 
 
 
 
//  )
 
 
 
 
//  }
 
 
 
 
//  }
 
//  export default Creat;
 
 
 
 
//   */}
 // this.state={   
     
          
 //     title: "English12Exam11",
 //     theQuestion:[
 //            {  theQuestion: "Mommmed ",
 //                first_Option: " Exellent",
 //                sec_Option: "hhh good",
 //                thrid_Option: " Hinotnb,bvbvcx7778865 bad",
 //                forth_Opti