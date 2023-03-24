import { useState } from "react"

export const RangeInput = () => {
  const [rangeValue, setRangeValue] = useState(17.5);

  return (
    <div>
      <input
        type="range"
        className="w-full bg-blue-700 cursor-pointer mb-4"
        min={5}
        max={30}
        step={12.5}
        value={rangeValue}
        onChange={(event) => setRangeValue(Number(event.target.value))}
      />
      <div className="flex justify-between">
        <p className="text-grey font-medium" style={{color: rangeValue === 5 ? '#181A1F' : '#6D727D'}}>5 mins</p>
        <p className="text-grey font-medium" style={{color: rangeValue === 17.5 ? '#181A1F' : '#6D727D'}}>15 mins</p>
        <p className="text-grey font-medium" style={{color: rangeValue === 30 ? '#181A1F' : '#6D727D'}}>30 mins</p>
      </div>
    </div>
  )
}
