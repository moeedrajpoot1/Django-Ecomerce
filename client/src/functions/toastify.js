import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const errorToast = (error) => {
 // Confirm function execution
  toast.error(`❌ ${error}!`, {
    position: "top-center",
    autoClose: 3000,
    theme: "dark",
    pauseOnHover: true,
    
  });
};

const successToast = (success) => {
  toast.success(`👍 ${success}!`, {
    position: "top-center",
    autoClose: 3000,
    theme: "dark",
    pauseOnHover: true,
  });
};


export { errorToast, successToast };
