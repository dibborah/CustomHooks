// CUSTOM HOOKS

// useState
// useEffect
// useRef

// useReducer(I don't know)
// useContext(I don't know)

// Deploy => To Host Website or Application in Server

import useFetch from "./hooks/useFetch";

const Users = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, isPending, error } = useFetch(url);
  if (isPending) {
    return <h2>...Loading</h2>
  }
  if(error){
    return <h2>{error}</h2>
  }
  return (
    <div>
      {data && data.map(user => {
        return <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      })}
    </div>
  )
}

export default Users;
