import React from 'react'
import PropTypes, { InferProps } from "prop-types"

const propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  valueField: PropTypes.string,
  textField: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

const defaultProps = {
  options: [],
  disabled: false,
  type: 'button',
  placeholder: ''
}

function FormSelect({
  // value,
  options,
  // disabled,
  type,
  // valueField,
  // textField,
  placeholder
  // onChange
}: InferProps<typeof FormSelect.propTypes>) {
  const setValue = () => {
    return (type ? "" : placeholder);
  }

  const dropList = () => {
    console.log('Drop');
  }

  const onInputEvent = (newValue: string) => {
    console.log(newValue);
  }

  return (
    <div className="v-form-select">
      <input
        className="v-form-select__input"
        type={type ?? ''}
        value={setValue() ?? ''}
        placeholder={placeholder ?? ''}
        spellCheck={false}
        onClick={dropList}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => onInputEvent(event.target.value)}
      />
      <span className="select-focus"></span>
      <ul>
        {
          options?.map(option => {
            return <li key={option}>{ option }</li>
          })
        }
      </ul>
    </div>
  )
}

FormSelect.displayName = 'FormSelect'
FormSelect.propTypes = propTypes
FormSelect.defaultProps = defaultProps

export default FormSelect