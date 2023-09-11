export function Button({
  text = "Submit",
  func = null,
  disabled = false,
  style = {
    padding: "9px",
    border: "none",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
  },
}) {
  return (
    <button onClick={func} disabled={disabled} style={style} className="Button">
      {text}
    </button>
  );
}
