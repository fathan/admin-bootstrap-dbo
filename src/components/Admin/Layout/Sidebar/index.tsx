import { FaHome, FaMailBulk, FaSignOutAlt } from "react-icons/fa"
import MenuListItem from "./MenuListItem"
import { menus } from "./data"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from "@/services/httpRequest/auth";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

import { useMediaQuery } from 'react-responsive';

export default function AdminSidebar () {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const isVisibleSidebarMobile = useAppSelector((state) => state.app.isVisibleSidebarMobile);

  const onHandleLogout = async () => {
    try {
      const logoutConfirmed = window.confirm("Are you sure you want to log out?");

      if (logoutConfirmed) {
        await logout({});
        router.push("/auth/login");
      }
    }
    catch (error: any) {
      toast.dismiss();
      toast
        .error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    }
  };

  const sidebarUI = () => {
    return (
      <div
        className="sidebar col-md-2 p-0"
        style={{
          position: 'fixed',
          height: '100%',
          backgroundColor: '#1b61ae'
        }}
      >
        <div
          id="sidebarMenu"
          style={{
            backgroundColor: '#1b61ae'
          }}
        >
          <div className="sidebar-menu d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <MenuListItem menus={menus} />

            <hr />

            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <div
                  className="nav-link d-flex align-items-center gap-4 text-white"
                  onClick={onHandleLogout}
                >
                  <FaSignOutAlt />
                  <span>
                    Logout
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {
        isMobile ?
          isVisibleSidebarMobile && sidebarUI()
        :
        sidebarUI()
      }

      <ToastContainer />
    </>
  )
}