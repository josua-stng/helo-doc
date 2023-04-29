import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
interface ProtectRoutesProps {
  children?: React.ReactNode;
}

const ProtectRoute = ({ children }: ProtectRoutesProps) => {
  const getLocalAccount = localStorage.getItem("account");

  if (!getLocalAccount) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "log in required",
    });
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectRoute;
