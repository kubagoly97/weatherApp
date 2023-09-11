import { useState } from "react";
export default function Error({ text = "Try again" }) {
  const [openError, setOpenError] = useState(true);
  const hideError = () => {
    setOpenError(!openError);
  };
  return (
    openError && (
      <div className="ErrorBox" onClick={hideError}>
        <p style={{ color: "red", fontSize: "30px", padding: "none" }}>
          {text}
        </p>
      </div>
    )
  );
}
