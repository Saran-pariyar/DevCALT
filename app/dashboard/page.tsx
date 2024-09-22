// "use client"

// import { useAppSelector } from '@/redux/store'
// import React from 'react'

// import { logOut, toggleModerator } from '@/redux/features/auth-slice'
// import { useDispatch } from "react-redux"
// import { AppDispatch } from "@/redux/store"
// import { useRouter } from "next/navigation"


// const DashBoard = () => {

//     const username = useAppSelector((state) => state.authReducer.value.username )
//     const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)


//     const dispatch = useDispatch<AppDispatch>();

//     const router = useRouter()


//     const onClickLogOut = () =>{
//       dispatch(logOut())
//       router.push("/")

//     }

//     const onClickToggleModerator = () =>{
//       dispatch(toggleModerator())
//     }

//   return (
//     <div className='flex flex-col items-center'>
//         <h1 className='text-white'>Username: {username}</h1>
//         <h2>{isModerator && "User is a Moderator"}</h2>
//         <button onClick={onClickLogOut}>log out</button>
//         <button onClick={onClickToggleModerator}>Toggle Moderator Status</button>
//     </div>
//   )
// }

// export default DashBoard

import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard