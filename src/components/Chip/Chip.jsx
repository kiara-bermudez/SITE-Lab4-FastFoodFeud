import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick, closeClick}) {
  return (
    <button className={isActive ? "chip active" : "chip"} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={closeClick}>{`X`}</span>
    </button>
  )
}

export default Chip
