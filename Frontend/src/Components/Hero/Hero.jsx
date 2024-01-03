
/**
 * Renders a hero section of a website.
 * Includes a header with a logo and overlay text,
 * as well as two sections with feature items.
 */
export default function Hero() {
  //create a variable for the number of sections in this page
  
  
    return (
    <>
      <header>
        <div className="header-content">
          <img src="src/assets/Asset 1 1.png" alt="Header Image" />
          <div className="overlay-text">
            <h1>SGS BIKE</h1>
            <p>Simulation to the Bikers</p>
          </div>
        </div>
      </header>
      <section id="features">
        <div className="feature-item">
          <img src="src/assets/image 4.png" alt="Feature Image 1" />
          <div className="feature-text">
            <h2>Matrix CXP Target Training Cycle</h2>
            <p>
              Give riders the kind of experience they’ll come back for with a cycle designed to track personalized training metrics. High-performance, low-maintenance engineering includes Target Training LED color wrap, intuitive console operation, extensive training programs, repeatable magnetic resistance, optimized ergonomics and intuitive four-way adjustment with quick-touch operation.
            </p>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="feature-item">
          <img src="src/assets/681d7e_40781f55bc874bf7978f9f8a9db4351c~mv2.png" alt="Feature Image 1" />
          <div className="feature-text">
            <h2>RealRyder ABF8</h2>
            <p>
              The articulating bike frame and handlebars—exclusive to the RealRyder Indoor Cycle—allow you to lean, turn, steer and balance through three essential planes of motion, becoming fully engaged with the bike, and overall riding experience. Whether you’re a cycling nut, fitness freak or a functional training junkie, the RealRyder Bike offers superior biomechanical, physiological and emotional benefits over your everyday stationary bike.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}