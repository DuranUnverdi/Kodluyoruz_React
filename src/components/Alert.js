import Alert_Left from "./Alert_Left";
import Alert_Right from "./Alert_Right";
function Alert() {
  return (
    <>
      <section id="Overview" className="alert">
        <div className="container">
          <div className="alert__all">
            <div className="row">
              <div className="col-12 col-lg-6 col">
                <div className="alert__left">
                  <Alert_Left />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <figure>
                  <Alert_Right />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Alert;
