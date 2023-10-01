
//NOT USED




// import React, { useEffect, useState } from 'react';
// import USERS_URL from '../APIS/UsersAPI';
// import axios from 'axios';
// import User from './User';


// function UserList() {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     const getUsers = async () => {
//      let data = await axios.get(USERS_URL)
//      console.log(data.data)
//      setUsers(data.data)
//     }
//     getUsers();
//   }, [])

//   const showUsers = users.map((user, index) => <User user={user} key={index}/>)

//   return (  
//     <div>
//       <div>
//         NewUserForm
//       </div>
//       {showUsers}
//     </div>
//   );
// }

// export default UserList;