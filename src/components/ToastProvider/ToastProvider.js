import React from "react";

const ToastContext = React.createContext(null);

export function useToastContext() {
  const ctx = React.useContext(ToastContext);

  if (ctx === null) {
    throw new Error("Toast context is null");
  }

  return ctx;
}

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  const addToast = () => {
    const newToast = {
      variant,
      message,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
    setMessage("");
    setVariant("notice");
  };

  const removeToast = (i) => {
    setToasts((oldToasts) => oldToasts.toSpliced(i, 1));
  };

  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
