import Select from 'react-select'

const options = [
  { values: 1, label: 'A' },
  { values: 2, label: 'B' },
]

const UserRol = () => {
  return (
    <>
      <Select options={options} isDisabled />
    </>
  )
}

export default UserRol
