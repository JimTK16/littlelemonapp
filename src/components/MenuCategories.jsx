const MenuCategories = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <h3 className="text-uppercase">Order for delivery!</h3>
        <div className=" d-flex justify-content-between mt-3">
          <button type="button" className="btn btn-primary">
            Lunch
          </button>
          <button type="button" className="btn btn-primary">
            Desserts
          </button>
          <button type="button" className="btn btn-primary">
            Meals
          </button>
          <button type="button" className="btn btn-primary">
            Specials
          </button>
        </div>
      </div>
    </section>
  )
}
export default MenuCategories
