
import { Navigate, useLocation } from "react-router-dom"
// protected route logic to prevent going to dashboard.
const ProtectedRoute = ({children}) => {
    const location = useLocation() //we will use useLocation hook in order to save the objects current location, 
    console.log(location, "--location")
  const token = localStorage.getItem("token") 
  // return token ?  children : <Navigate to="/login" />
  if (!token) {
    return (
      <Navigate
      to="/login"
      state={{from:location}} 
      replace
      />
    )
  }
  return children;
}

export default ProtectedRoute
