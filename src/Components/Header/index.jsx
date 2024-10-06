
import { Link, useNavigate } from 'react-router-dom';
import './index.css'
import Cookies from 'js-cookie'
import { FcTodoList } from "react-icons/fc";

const Header = () => {
  const jwtToken=Cookies.get("jwtToken")
  const navigate=useNavigate()
  const onClickLogoutBtn=()=>{
    Cookies.remove('jwtToken')
    navigate("/login")
    Cookies.remove("userName")
  }

  const userName=Cookies.get("userName")
  
  return (
    <div className='text-light '>
      <nav className='p-1 bg-danger'>
        <ul className='headerUnorderedList'>
          <li className='px-3'><FcTodoList className='navbarImg text-light ' /></li>
          <div className='buttonsContainer'>
            {!jwtToken ? (<div className='btnAlign'>
            <li>
              <Link to="/login"><button type='button' className='btn btn-outline-light m-1'>LOGIN</button></Link>
            </li>
            <li>
              <Link to="/signup"><button type='button' className='btn btn-outline-light m-1'>SIGN UP</button></Link>


            </li>
            </div>) : (<div className='btnAlign'>
            <li>
              <div className='badge pill bg-white text-danger' title={`${userName}`}>
                {userName.slice(0,1).toUpperCase()}
              </div>
            </li>
            <li>
              <button type='button' className='btn btn-outline-light m-1' onClick={onClickLogoutBtn} title='logout'>LOGOUT</button>
            </li>
            </div>)}
            
            
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Header
