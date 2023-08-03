import { user } from "@/services/httpRequest/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setIsVisibleSidebarMobile } from "@/redux/features/appSlice";

export default function AdminHeader() {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const dispatch = useAppDispatch();
  const isVisibleSidebarMobile = useAppSelector((state) => state.app.isVisibleSidebarMobile);

  const onHandleSidebarVisible = () => {
    if (isVisibleSidebarMobile) {
      dispatch(setIsVisibleSidebarMobile(false));
    }
    else {
      dispatch(setIsVisibleSidebarMobile(true));
    }
  };

  const fetchUser = async () => {
    try {
      const response = await user();
      
      if (response.data.user !== null) {
        setEmail(response.data.user.email);
      }
      else {
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
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <header
        className="navbar sticky-top flex-md-nowrap p-0"
        style={{
          backgroundColor: '#e7e7e7'
        }}
      >
        <Link
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
          style={{
            backgroundColor: '#444444'
          }}
          href="/admin"
        >
          {email}
        </Link>

        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button
              className="nav-link px-3 text-dark"
              type="button"
              onClick={onHandleSidebarVisible}
            >
              <FaBars />
            </button>
          </li>
        </ul>
      </header>

      <ToastContainer />
    </>
  )
}