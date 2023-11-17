import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { BsBarChart } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
const Sidebar = () =>{
    return (
        <div className={css.container}>
           
           <div className={css.menu}>
                <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                <div className={css.sidebaritem}>
                    <MdSpaceDashboard size={30}/>
                    <div className={css.dashboardlink}>Dashboard</div>
                </div>
                </NavLink>
                <NavLink to="analytics" className={css.item} title={"Analytics"}>
                <div className={css.sidebaritem}>
                    <BsBarChart size={30} />
                    <div>Analytics</div>
                </div>
                </NavLink>
                <NavLink to="account" className={css.item} title={"Account"}>
                <div className={css.sidebaritem}>
                    <FaUserCircle size={30} />
                    <div className={css.accountlink}>Account</div>
                </div>
                </NavLink>
           </div>
        </div>
    )
}
export default Sidebar