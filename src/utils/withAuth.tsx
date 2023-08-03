import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { user } from "@/services/httpRequest/auth";
import { AppProps } from "next/app";

export default function withAuth<P extends AppProps>(Component: React.ComponentType<P>) {
  const WrappedComponent = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      async function checkAuthentication() {
        try {
          const response = await user();

          if (typeof response.data.user === 'undefined') {
            router.push("/auth/login");
          }
        } catch (error) {
          router.push("/auth/login");
        }
      }

      checkAuthentication();
    }, []);

    return <Component {...props} />;
  };

  return WrappedComponent;
}
