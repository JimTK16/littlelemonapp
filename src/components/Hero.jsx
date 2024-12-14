import heroImg from '../assets/restaurant chef B.jpg'

const Hero = () => {
  return (
    <section className="mt-5">
      <div className=" container">
        <div className=" row align-items-center">
          <div className="col col-xs-12 col-lg-6">
            <h1 className="text-success">Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn btn-primary">Reserve a table</button>
          </div>

          <div className="d-none d-md-block col-md-6">
            <img src={heroImg} className="rounded img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
