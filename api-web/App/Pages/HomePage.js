import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { title: "Welcome" };
  }

  render() {
    return (
      <div>
        <header className="masthead text-center text-black">
          <div className="masthead-content">
            <h2 className="masthead-subheading mb-0">Need Planner For Your Event?</h2>
            <Link to="/Event/Create" className="btn btn-primary btn-xl rounded-pill mt-5">
              CREATE AN EVENT
            </Link>
          </div>
        </header>

        <section>
          <div className="container">
            <div className="row">
              {/* Item 1 */}
              <div className="col-lg-3 col-md-6">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src="img/01.jpg" alt="Simplicity" />
                  <h3 className="mt-3">SIMPLICITY</h3>
                  <p>Simple - Clean - Hi-Tech For Your Event. From Concept until Event is held.</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="col-lg-3 col-md-6">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src="img/02.jpg" alt="Robust" />
                  <h3 className="mt-3">ROBUST</h3>
                  <p>Reliable in concept from wedding to conference. Powerful in Data Management.</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="col-lg-3 col-md-6">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src="img/03.jpg" alt="Cutting Edge" />
                  <h3 className="mt-3">CUTTING EDGE</h3>
                  <p>From QR Code with LIVE Notif - Cloud Computing. You will have a Hi-Tech Event.</p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="col-lg-3 col-md-6">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src="img/02.jpg" alt="Innovation" />
                  <h3 className="mt-3">INNOVATION</h3>
                  <p>Next-gen features and unique tools to make your event stand out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
