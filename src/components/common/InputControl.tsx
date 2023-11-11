interface iinputcontrol {
  name: string
  label: string
  value: string
  required?: boolean
  password?: boolean
  classInvalid?: string | undefined
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputControl = (input: iinputcontrol) => {
  const {
    password,
    required,
    label,
    classInvalid,
    name,
    value,
    handleChange,
    handleBlur,
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
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          type={password ? 'password' : 'text'}
          className={`form-control ${Boolean(classInvalid) && 'is-invalid'}`}
        />
        {Boolean(classInvalid) && <small className="text-danger">{classInvalid}</small>}
      </div>
    </>
  )
}

export default InputControl
