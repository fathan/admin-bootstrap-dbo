'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '@/services/httpRequest/auth';

export interface ILoginForm {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email format'),
  password: yup.string().required('Password is required')
});

function AuthLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
  });
  const router = useRouter();

  const onRequestLogin = async (data: any) => {
    try {
      await login(data);
      router.push('/admin');
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

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    onRequestLogin(data);
  };

  return (
    <>
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">Authentication</h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-6 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-danger text-white text-center pt-5">
                      <img src="https://dbo.id/wp-content/uploads/2019/09/DBO_Logo_White.png" className="mt-5" width={400} alt="DBO" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 py-5 px-5">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="row g-4"
                      >
                        <div className="col-12">
                          <label className="text-light-emphasis">
                            Email
                            <sup className="text-danger">*</sup>
                          </label>
                          <div className="input-group mt-2">
                            <input
                              type="email"
                              {...register('email')}
                              className="form-control"
                              placeholder="e.g: fathan@dbo.id"
                            />
                          </div>
                          {errors.email && <span className="text-danger small">{errors.email.message}</span>}
                        </div>

                        <div className="col-12">
                          <label className="text-light-emphasis">
                            Password
                            <sup className="text-danger">*</sup>
                          </label>
                          <div className="input-group mt-2">
                            <input
                              type="password"
                              {...register('password')}
                              className="form-control"
                              placeholder="Enter Your Password"
                            />
                          </div>
                          {errors.password && <span className="text-danger small">{errors.password.message}</span>}
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-danger px-4"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  )
}

export default AuthLogin;