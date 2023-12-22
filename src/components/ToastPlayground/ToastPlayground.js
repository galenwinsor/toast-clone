import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";
import { useToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { message, setMessage, variant, setVariant, addToast } =
    useToastContext();

  return (
    <>
      <ToastShelf />
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <form onSubmit={(e) => e.preventDefault() || addToast()}>
          <div className={styles.controlsWrapper}>
            <div className={styles.row}>
              <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: "baseline" }}
              >
                Message
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                  id="message"
                  className={styles.messageInput}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label}>Variant</div>
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                {VARIANT_OPTIONS.map((variantOption, i) => (
                  <label key={i} htmlFor={`variant-${variantOption}`}>
                    <input
                      id={`variant-${variantOption}`}
                      type="radio"
                      name="variant"
                      value={variantOption}
                      onChange={() => setVariant(variantOption)}
                      checked={variant === variantOption}
                    />
                    {variantOption}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label} />
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <Button type="submit">Pop Toast!</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ToastPlayground;
