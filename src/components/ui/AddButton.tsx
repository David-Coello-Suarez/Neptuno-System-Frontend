interface iaddbutton {
  handleClickAdd: () => void
  msgButton: string
}

const AddButton = ({ handleClickAdd, msgButton }: iaddbutton) => {
  return (
    <>
      <div className="mb-3 row">
        <div className="col-md-4 col-3"></div>
        <div className="col-md-8 col-9 text-end">
          <button
            onClick={handleClickAdd}
            className="align-items-center btn btn-primary btn-rounded btn-sm d-inline-flex">
            <i className="material-symbols-outlined">person_add</i>
            <strong className="d-md-inline-block d-none ms-2">{msgButton}</strong>
          </button>
        </div>
      </div>
    </>
  )
}

export default AddButton
