import Swal from "sweetalert2";
type Props = {
  title: string;
  message: string;
};

const ConfirmAlert = ({ message, title }: Props) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: "success",
  });
};

export default ConfirmAlert;
