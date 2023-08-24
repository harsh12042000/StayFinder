import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Gallery = () => {
  return (
    <>
      <div>
      <h1 style={{ textAlign: 'center' }}>View From Our Gallery</h1>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} showThumbs={false}>
        <div>
          <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" alt="View 1" />
          <p className="legend">SPEND QUALITY HOLIDAYS WITH US...</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg" alt="View 2" />
          <p className="legend">MAKE YOUR VACATION COMFORTABLE</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg" alt="View 3" />
          <p className="legend">LIVE THE WONDEROUS LIFE</p>
        </div>
      </Carousel>
    </div>
      <br />
      <main role="main">
        <h1 style={{ textAlign: "center" }}>Room Facility available</h1>
        <div className="container jumbotron text-center bg-primary">
          <h1 style={{ color: "blanchedalmond" }}>Super Deluxe Rooms</h1>
          <p style={{ color: "black" }}>
            Super Deluxe rooms are spacious. The room comes with a double bed
            with a sitting area for two persons. The rooms feature a walk-in
            wardrobe area, intercom, WIFI, LED flat screen TV, as well as a
            dressing area with a full-length mirror. Full ceramic bathroom with
            24 hours hot water is available in the room. Occupancy: Can
            accommodate 2 Adults and 2 Kids or 3 Adults with extra bed.
          </p>
        </div>
      </main>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/OIP.34b9uiLbSDQtOnZNV426_wHaE8?pid=ImgDet&rs=1"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/R.663beeb1bda682d01cda6212b2fce96d?rik=LSb%2fDLAg3Nl59A&riu=http%3a%2f%2fhilltoppanhala.com%2fimages%2frooms%2frooms-detail-1.jpg&ehk=xyz1sgrdTJaQ06B44fx%2fPhLM0YeNk7%2fkHWrWvrWTyX8%3d&risl=&pid=ImgRaw&r=0"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://www.jetwinghotels.com/jetwingblue/wp-content/uploads/sites/26/2018/02/super-del-thumb-1.jpg"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
