// import React, { useEffect, useState } from 'react'
// import Header from '../Header'
// import axios from 'axios'
// import Cookies from 'js-cookie'
// import Home from '../Home'




// const Testcase = () => {
//     const [dataList,setDataList]=useState([])
//     let userN=Cookies.get("userName")
//     const urlLocal = "http://localhost:5000"


//     const loadData=async()=>{
//     try {
//         const url=`${urlLocal}/api/eachUserTasks`
//         const reqBody={
//             userName:userN,
//             each_todo_data:
//         }
//         const resData=await axios.post(url)
//         if(resData.status===200) {
//             setDataList(resData.data.data.spice(0).reverse())
//         }
//     } catch (error) {
//         console.error("Error in getting data : ", error)
//     }
//     }

// useEffect(()=>{
//     loadData()
// },[])

// console.log(dataList)
//   return (
//     <div>
        
//         <Home/>
//       <h1>hello</h1>
      
//     </div>
//   )
// }

// export default Testcase
