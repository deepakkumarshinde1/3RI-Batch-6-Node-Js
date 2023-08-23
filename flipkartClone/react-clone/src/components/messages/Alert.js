import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function Alert() {
  let { showMessage, message } = useSelector((state) => state.message);
  useEffect(() => {
    if (showMessage === true) {
      Swal.fire({
        icon: message.type,
        title: message.title,
        text: message.text,
      });
    }
  }, [showMessage]);
  return <></>;
}
export default Alert;
