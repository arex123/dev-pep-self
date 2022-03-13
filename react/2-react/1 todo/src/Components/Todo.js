//rcc + tab 
import React, { Component } from 'react'

class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:'Check mails',id:1},{task:'Read articles',id:2},{task:'more articles',id:3}],
            currTask:''
        }
    }

    handleChange=(e)=>{ //e will be passed by-default, and we are using arrow function to use above this object
        console.log(e.target.value); //checking value of e
        this.setState({
            currTask:e.target.value
        })
    }

    handleSubmit=()=>{
        //so now we will after clicking on submit button , we need to add new task to task array
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}], //adding new task in array from input box
            /*

            syntax of above code:
           
           "" tasks-new-array : [ ...old-task-array, {new task} ];  "" 

            let arr = [1,5,6,7,8];

            let r = [...arr,20] // using spread operator for copying all array element in new array and adding new element and 

            console.log(arr); //[ 1, 5, 6, 7, 8 ]
            console.log(r); //[ 1, 5, 6, 7, 8, 20 ]



            ->  every change wil be a immutable change(whether it is array or it is object) in react
            ->  we are using spread operator to make a new array and store a new task in it , because making a new array will give an address to new array and that will 
                clearly indicate that a new something is added and hence it will render new thing
             */
            currTask:''  // emtying input text box
        })
    }

    handleDelete=(id)=>{
        //for deleting lets delete that wanted task from array, and we'll fing that task using its id value
        let narr = this.state.tasks.filter((task)=>{ 
            /*
            Always use arrow function for getting the this object of parent class, or if u want to use simple function , then remember it will 
            always make its own this so for using this of parent function use  .bind(this), in function 
            */
           return task.id!==id;
        })
        
        // let newIndex = 0;
        // //updating indexes of new array also as their ids are collapsing sometimes,
        // //trying to assign new key but not able to😣
        // narr = narr.map((ele)=>{
        //     newIndex=newIndex+1
        //     return ele.id=newIndex
        // })

        this.setState({
            tasks:[...narr] //updating tasks[] with new array in which that object is not present which we wanted to delete, as we filtered it above
        })
    }

    render() { //every time something gets change in state render() gets triggered
        return (
            <ul>
                {/* hello */}
                <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                {
                    this.state.tasks.map((taskObj)=>( //we dont use curly braces here as it will not be able to print it in jsx we simply use open bracket under returned function
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={()=> this.handleDelete(taskObj.id)}>Delete</button> 
                        </li>
                            /* how delete button is working
                            so we are passing id of that taskObj which will be deleted in fututre 
                            so we will filter that task[] and not include that selected id 
                            , whenever passing an argument in function use that same syntax ( arrow function) which is 
                            being used in button tag.

                             */
                    ))
                }

            </ul>
        );
    }
}

export default Todo;