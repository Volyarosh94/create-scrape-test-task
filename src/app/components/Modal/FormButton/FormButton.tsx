import { useState } from "react"

interface Props {
  title: string
  onClose: () => void
  classToAdd: string
}

export const FormButton: React.FC<Props> = ({ onClose, title, classToAdd }) => {
  return (
    <button
      onClick={onClose}
      className={"p-2.5 w-56 border border-light rounded-lg shadow-md" + classToAdd}
    >
      {title}
    </button>
  )
}
