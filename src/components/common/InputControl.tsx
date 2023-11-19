interface iinputcontrol {
  name: string
  label: string
  value: string
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  classInvalid?: string | undefined
  type?: 'password' | 'string' | 'date' | 'datetime-local'
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputControl = (input: iinputcontrol) => {
  const {
    name,
    label,
    value,
    required,
    readonly,
    disabled,
    handleBlur,
    placeholder,
    type = 'text',
    handleChange,
    classInvalid,
  } = input

  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          readOnly={readonly}
          onBlur={handleBlur}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeholder}
          className={`form-control ${Boolean(classInvalid) && 'is-invalid'}`}
        />
        {Boolean(classInvalid) && <small className="text-danger">{classInvalid}</small>}
      </div>
    </>
  )
}

export default InputControl
