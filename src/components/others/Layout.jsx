import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div>
                <Link to='/'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout