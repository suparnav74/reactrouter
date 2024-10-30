import { Link,Outlet } from "react-router-dom"
const Dashboard = () => {
  return (
    <div className="mt-10">
      This is Dashboard Page.
     <div className="mt-10">
      <Link to="profile"  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
      Profile
      </Link>
      <Link to="settings"  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
      Settings
      </Link>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
