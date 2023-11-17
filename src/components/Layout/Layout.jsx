import css from './Layout.module.css'
import {BiSearch} from 'react-icons/bi';
import Sidebar from "../Sidebar/Sidebar";
import { Navigate,Outlet,useLocation } from 'react-router-dom';
const Layout = () =>{
    const {pathname}=useLocation();
    return (
        
        <div className={css.container}>
            <Sidebar />
            {pathname === "/" && <Navigate to="/dashboard" />}
            <div className={css.dashboard}>
                {/* <div className={css.topBaseGradients}>
                    <div className='gradient-red'></div>
                    <div className='gradient-orange'></div>
                    <div className='gradient-blue'></div>
                </div> */}
                <div className={css.header}>
                    <div className={css.nameDisplay}>
                        Welcome Back!,Name
                    </div>
                    <div className={css.searchBar}>
                        <BiSearch size={20} />
                        <input type="text" placeholder='Search for anything' />
                    </div>
                </div>
                <div>
                    <div className={css.content}>
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout