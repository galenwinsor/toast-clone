import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = useToastContext();

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, i) => (
        <li className={styles.toastWrapper} key={`toast-${i}`}>
          <Toast
            variant={toast.variant}
            isVisible={true}
            onDismiss={() => removeToast(i)}
            message={toast.message}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
