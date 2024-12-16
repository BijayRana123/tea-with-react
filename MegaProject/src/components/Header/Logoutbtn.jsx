import React from 'react'
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config";
import { logOut } from "../../appwrite/auth"

function Logoutbtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logOut())
        })
    }
  return (
    <button 
    onClick={logoutHandler}
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOut</button>
  )
}

export default Logoutbtn
