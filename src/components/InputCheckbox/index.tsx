import classNames from "classnames"
import { useRef, useState, useEffect } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [isChecked, setIsChecked] = useState(checked);
  const handleLabelClick = () =>{
    setIsChecked((prevState) => !prevState);
  }

  useEffect(() => {
    if (onChange) {
      console.log("test");
      onChange(isChecked); // Notify parent component of the state change
    }
  }, [isChecked]);
  
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
      onClick={handleLabelClick}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": isChecked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={isChecked}
        disabled={disabled}
        onChange={() => console.log("test")}
      />
    </div>
  )
}
