import React, {useState} from "react";
import Users from "./users";
import api from "../api"
import SearchStatus from "./searchStatus";

function App ()  {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleBookmark = (id)=>{
        setUsers(users.map((user)=>{
            if(user._id===id){
                return {...user, bookmark: !user.bookmark}
            }
            return user;
        })
    )}
    
  return (
    <div>
        <SearchStatus length = {users.length} />
      <Users users={users} onDelete={handleDelete} onBookmark={handleBookmark}/>
    </div>
  );
}

export default App