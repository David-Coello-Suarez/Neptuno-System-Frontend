import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Select from 'react-select'

const data = [
  { id: 1, Name: 'A' },
  { id: 2, Name: 'B' },
]

const categories = data.map((item) => ({ value: item.id, label: item.Name }))

const Country = () => {
  return (
    <>
      <Form.Group controlId="validationCustom02">
        <Form.Label>Provincia</Form.Label>
        <SelectBox
          options={categories}
          name={'select1'}
          onChange={(x) => console.log('cxlick => ' + x)}
        />
      </Form.Group>
    </>
  )
}

export default Country

interface iselectbox {
  options: unknown[]
  name: string
  onChange: (x: unknown) => void
}

const SelectBox = ({ options, name }: iselectbox) => {
  const [optionSelected, setSelectedOptions] = useState<unknown>([])

  //   const handleChange = (selected: { value: unknown }) => {
  //     onChange({ name, category: selected.value })
  //     //console.log(selected)
  //     setSelectedOptions(selected)
  //   }

  return (
    <Select
      options={options}
      isLoading={!options}
      closeMenuOnSelect={true}
      onChange={setSelectedOptions}
      value={optionSelected}
      name={name}
    />
  )
}
