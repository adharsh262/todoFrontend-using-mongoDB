import './index.css'


import './index.css'
import { MdDelete } from "react-icons/md";

const Items=(props)=>{

const {forEach,onClickTodoDelete,onChangeCheckBox}=props
const {_id,task,is_checked,created_at}=forEach

const onClickDeleteTodo=()=>{
    onClickTodoDelete(_id)
}
const onCheckedChange=()=>{
    onChangeCheckBox(_id,is_checked)
}



const addDecoration=is_checked?'addRed':''


    return (
        <li className="itemsContainer">
            <div className='labelContainer'>
            <input type="checkbox" className='checkBoxInput' id={`${_id}`} checked={is_checked} onChange={onCheckedChange}/>
            <label className={`label ${addDecoration}`} htmlFor={`${_id}`}>{task}</label>
            </div>
            <div className='d-none d-lg-inline'>
            <div><p>{created_at}</p></div>
            <div><p>{created_at}</p></div>
            </div>
            <button className="deleteBtn" onClick={onClickDeleteTodo} type='button'>
            <MdDelete className='deleteIcon'/>
            
            </button>
        </li>

    )

}


export default Items