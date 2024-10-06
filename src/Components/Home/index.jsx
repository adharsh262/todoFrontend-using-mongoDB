
import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import Items from '../Items'
import { ThreeDots } from 'react-loader-spinner'
import Header from '../Header'


const apiLoadingStatus = {
  initial: "INITIAL",
  in_Progress: "IN_PROGRESS",
  done: "DONE"
}


const Home = () => {

  const [dataList, setDataList] = useState([])
  const [inputEl, setInputEl] = useState("")
  // const [showErrorMsg,setErrorMsg]=useState({errMsg:false,msg:''})
  const [loadingStatus, setLoading] = useState(apiLoadingStatus.initial)
  // const urlLocal = "http://localhost:5000"
  const urlLocal="https://todo-backend-mongodb.onrender.com"
  const loadData = async () => {
    try {
      setLoading(apiLoadingStatus.in_Progress)
      const url = `${urlLocal}/api/showTasks`
      // const options={
      //     method:'GET',
      //     // headers:{
      //     //     'Content-Type':'application/json'
      //     // }
      // }
      // const response=await fetch(url,options)
      // const jsonResponse=await response.json()
      // if(jsonResponse.success) {
      //   setDataList(jsonResponse.data)
      // }

      const resData = await axios.get(url);

      if (resData.status === 200) {

        setDataList(resData.data.data.splice(0).reverse())
        setLoading(apiLoadingStatus.done)
      }

    } catch (error) {
      console.error("Error in getting data : ", error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])


  const onClickTodoDelete = async (id) => {

    try {
      setLoading(apiLoadingStatus.in_Progress)
      const url = `${urlLocal}/api/delete/${id}`
       await axios.delete(url)
      loadData()
      
    } catch (error) {
      console.error("Error in Deleting Data : ", error)
    }
  }


  const onChangeCheckBox = async (id, isChecked) => {
    try {
      setLoading(apiLoadingStatus.in_Progress)
      const url = `${urlLocal}/api/updateTask/${id}`
      await axios.patch(url, { is_checked: isChecked })
      loadData()

    } catch (error) {
      console.error("Error in Deleting Data : ", error)
    }
  }

  const addingTask = async () => {
    setLoading(apiLoadingStatus.in_Progress)
    const url = `${urlLocal}/api/addTasks`
    const addtasks = {
      task: inputEl
    }
    await axios.post(url, addtasks)
    //  if(!addingNewTask.success) {
    //   setErrorMsg({errMsg:true,msg:addingNewTask.msg})
    //  }
    setInputEl("")
    loadData()
  }


  const onSubmitForm = (e) => {
    e.preventDefault()
    addingTask()

  }
  const renderLoadingStatus = () => {
    return (


      <div className="products-loader-container d-flex justify-content-center">
        <ThreeDots type="ThreeDots" color="#ff0000" height="50" width="50" />
      </div>

    )
  }

  const renderListElements = () => {
    return (
      <>
        <form className='fromEl' onSubmit={onSubmitForm}>
          <input type="text" placeholder='Type Here...' className='inputEl' value={inputEl} onChange={(e) => setInputEl(e.target.value)} />
          <button className="addBtn" type='submit' title='Add'>Add</button>


        </form>
        <ul className="itemsContainerList">
          {dataList.map(forEach => <Items forEach={forEach} key={forEach._id} onClickTodoDelete={onClickTodoDelete} onChangeCheckBox={onChangeCheckBox} />)}
        </ul>
      </>

    )
  }

  const renderAllElements = () => {
    switch (loadingStatus) {
      case apiLoadingStatus.in_Progress:
        return renderLoadingStatus()
      case apiLoadingStatus.done:
        return renderListElements()

      default:
        return null;
    }
  }


  return (




    <div className='homeContainer'>



        <Header />

        <div className='bgContainer'>
          <div className='Home shadow lg-shadow p-3 mt-5'>


            <div className='headingContainer'>

              <h1 className='head1'>Let Me Remember</h1>
              <h2 className='head2'>For You</h2>


            </div>

            <div>
              {renderAllElements()}
            </div>

          </div>
        </div>



      </div>
  )
}

export default Home