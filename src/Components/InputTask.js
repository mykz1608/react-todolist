
import {Input, InputGroup} from 'rsuite';
import {Component} from 'react';
import  TaskList from './TaskList';
// import TaskList from './TaskList';

let tasksList = [];
// const check = <Input placeholder = 'Input task here' onChange = {this.inputHandler} onPressEnter={this.enterTask}/>
// const myContainer = useRef(null);

class InputTask extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            currentInput:'',
            taskList:[]
        };
       
    }

    inputHandler = (event) => {
        // console.log(event);
        this.setState({currentInput:event});
        // console.log(...this.state.tasksList);
    }

    enterTask = (event) => {

        // console.log(myContainer);
        if(this.state.currentInput){
            this.setState(  
                {
                    taskList: [...this.state.taskList,this.state.currentInput],
                    currentInput: ''
                }
            )
        }
        else {
            alert('Input task cannot be empty!');
        }
        
    
        event.target.nodeName === 'BUTTON' ? event.target.parentElement.firstChild.value = '': event.target.value = '';
        
    }

    render() {
        const styles = {
            width: 300,
            marginBottom: 10
          };

        return (

                <>
                <InputGroup inside style = {styles}>
                    <Input placeholder = 'Input task here' onChange = {this.inputHandler} onPressEnter={this.enterTask}/>
                    <InputGroup.Button appearance = 'primary' onClick = {this.enterTask} >
                        ↵
                    </InputGroup.Button>
                </InputGroup>
                <TaskList tasks = {this.state.taskList}/>
                </>

            ); 
    }

    // componentDidUpdate() {
    //     // console.log(this.state.tasksList);
    //     tasksList = this.state.tasksList;
    //     // console.log(tasksList);
        
    // }
}

export default InputTask;