interface iaddbutton {
  handleClickAdd: () => void
  msgButton: string
}

const AddButton = ({ handleClickAdd, msgButton }: iaddbutton) => {
  return (
    <>
      <div className="mb-3 row">
        <div className="col-md-4 col-3"></div>
        <div className="col-sm-8 col-9 text-right">
          <button onClick={handleClickAdd} className="btn btn-primary btn-rounded">
            <i className="fa fa-plus"></i>
            <strong className="d-md-inline-block d-none m-l-5">{msgButton}</strong>
          </button>
        </div>
      </div>
    </>
  )
}

export default AddButton
