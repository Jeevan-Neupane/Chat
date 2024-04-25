import Swal from "sweetalert2";
type Props = {
  message: string;
  title: string;
};

const ErrorAlert = ({ title, message }: Props) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: "error",
    background: "#182546",
    color: "#fff",

  });
};

export default ErrorAlert;
