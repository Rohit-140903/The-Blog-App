// import React from "react";
// import { useDispatch } from "react-redux";
// import authService from "../../appwrite/service";
// import { logout } from "../../store/authSlice";



// function LogoutBtn(){
//     const dispatch = useDispatch()
//     const logoutHandler = () =>{
//         authService.logout().then(() =>{
//             dispatch(logout())

//         })
//     }
//     return (
//         <button className = 'inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-semibold'
//         onClick = {logoutHandler}>Logout</button>
//     )
// }

// export default LogoutBtn


import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, } from "react-redux";
import authService from "../../appwrite/service";
import { logout } from "../../store/authSlice";


function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // auth layout handles the logout and navigation
  // so we don't need to use navigate here

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-semibold"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
