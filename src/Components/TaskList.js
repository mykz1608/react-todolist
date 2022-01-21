// import {Component} from 'react';
import { Checkbox, CheckboxGroup } from 'rsuite';
import CloseIcon from '@rsuite/icons/Close';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import {FlexboxGrid,List} from 'rsuite';
// class TaskList extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     tasks: []
//         // }
//     }

//     render() {
//         return (
//             <CheckboxGroup name="checkboxList">
//                 {
//                     this.props.tasks
//                 }
//                 <Checkbox>Item A</Checkbox>
//                 <Checkbox>Item B</Checkbox>
//             </CheckboxGroup>
//         );
//     }
// }
// const styles = {font-size:'20px'};

const TaskList = ({tasks}) => {
    // console.log(tasks);
    // let test = tasks.map(t => {
    //     <Checkbox>tasks</Checkbox>
    // });

    // const test = tasks.map((t,i) => <><Checkbox key = {i} value = {t} >{t}<IconButton icon = {<CloseIcon/>}/></Checkbox>
                                    // </>)

    // console.log(tasks)
    return(
        // <CheckboxGroup name="checkboxList">
        //     {test}
        // </CheckboxGroup>
        
        <List bordered>
            {tasks.map((item, index) => (
            <List.Item key={index} index={index}>
                <FlexboxGrid>
                    <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={4}><Checkbox></Checkbox></FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={11}><h3 style = {{position:'absolute', left:0}}>{item}</h3></FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={1}><IconButton size = 'sm' icon = {<CloseIcon/>}/></FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
                </FlexboxGrid>
            </List.Item>
            ))}
        </List>
    );
}

export default TaskList;