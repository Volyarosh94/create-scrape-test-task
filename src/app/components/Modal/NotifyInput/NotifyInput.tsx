import { useState } from "react"

interface Props {
  title: string,
  placeholder: string,
}

export const NotifyInput: React.FC<Props> = ({title, placeholder}) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="mb-6">
      <div className="flex gap-3 items-center mb-2 relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span></span>
        <p className="font-medium text-main text-sm">{title}</p>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="text-main w-full py-2.5 px-3.5 border-light text-light border rounded-lg focus-visible:bg-focuced"
      />
    </div>
  )
}
