import Swal from "sweetalert2";

export const successToast = (title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "success",
    title: `${title}`,
  });
};

export const successSwal = (title, img) => {
  let timerInterval;
  Swal.fire({
    title: `${title}`,
    imageUrl: `${img}`,
    html: "I will automatically close in <b></b> milliseconds.",
    imageWidth: 200,
    width: 370,
    timer: 3000,
    timerProgressBar: true,
    onBeforeOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        const content = Swal.getContent();
        if (content) {
          const b = content.querySelector("b");
          if (b) {
            b.innerHTML = Swal.getTimerLeft().toString();
          }
        }
      }, 100);
    },
    onClose: () => {
      clearInterval(timerInterval);
    },
  });
};

export const errorSwal = (title, img) => {
  Swal.fire({
    title: `${title}`,
    imageUrl: `${img}`,
    imageWidth: 200,
    width: 370,
    showConfirmButton: true,
    confirmButtonText: "Try Again",
    confirmButtonColor: "#21c063",
  });
};

export default {
  successToast,
  successSwal,
  errorSwal,
};
