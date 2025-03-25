import classNames from "classnames"
import { useRef,useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    if (onChange) {
      onChange(newCheckedState); 
    }
  };

  const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (!disabled) {
      handleChange();
    }
    e.preventDefault();
  };

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
      onClick={(e) => handleLabelClick(e)}
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
        onChange={() => onChange(!isChecked)}
      />
    </div>
  )
}
