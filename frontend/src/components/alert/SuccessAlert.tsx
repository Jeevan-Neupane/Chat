import Swal from "sweetalert2";
type Props = {
  message: string;
  title: string;
};

const SuccessAlert = ({ title, message }: Props) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: "success",
    background: "#182546",
    color: "#fff",
  });
};

export default SuccessAlert;
