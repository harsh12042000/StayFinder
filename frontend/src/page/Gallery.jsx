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



      <div className="container jumbotron text-center bg-primary">
        <h1 style={{ color: "blanchealmond" }}> Deluxe Rooms</h1>
        <p style={{ color: "black" }} d>
          Our well-designed and modern non-smoking Deluxe Rooms offers comfort and
          convenience to business and leisure guests. From panoramic runway view,
          airport view, garden view to airport control tower view, each room
          includes features such as luxury bedding, a flat-screen smart TV, an
          automated minibar, well-lit work desk and high speed internet access,
          These rooms are perfect if you are looking for average room as these
          rooms have valley view balcony and having stunning outside view.
        </p>
        {/* <p>
                  <a href="#" class="btn btn-primary my-2">Main call to action</a>
                  <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p> */}
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/R.8b7d40ae126b40801dbbd34832543b93?rik=a9Xb0ALLgnXVIw&riu=http%3a%2f%2fhotelmalaysia.com.my%2fimages%2fDeluxe+Room%2fIMGL6447xxx.jpg&ehk=GytVEqzWpxXoBtH2N1KdkS%2bEOU7PFPLnhLxqGS0CfsM%3d&risl=&pid=ImgRaw&r=0"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/R.df23108ab4041fb63df508bbebd042e4?rik=2vNhZTyz%2bS7%2bIg&riu=http%3a%2f%2fimages.ski.com%2fmedia%2fSlideshow%2fjacksonhole_snakeriverlodgeandspa3.jpg&ehk=o16PTeXz5SHE2brSgMm5HH2vpAXtLLC%2fbRA3ChmwwNI%3d&risl=&pid=ImgRaw&r=0"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/OIP.C9slgOJVBVlSurNl6Xi33wHaDt?pid=ImgDet&w=740&h=370&rs=1"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container jumbotron text-center bg-primary">
        <h1 style={{ color: "blanchealmond" }}> Economy Rooms</h1>
        <p style={{ color: "black" }} d>
          Economy rooms are perfect for guests who are willing to live comfortably
          , but for minimum price . The comfort is the same as other rooms but the
          rooms do not have view. The rooms are equipped with double bed and all
          facilities same as higher category rooms.
        </p>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://th.bing.com/th/id/R.7b8d03e78fd580cb1493477c0090074c?rik=k5eZm35ogE8C2A&riu=http%3a%2f%2fwww.saint-petersburg.com%2fimages%2fhotels%2fambassador-hotel%2faccommodation%2frooms%2feconomy-double-room.jpg&ehk=YOv1Ed5Rmzng4cSif4cuZdu9A2QPpegxKOZtpUTw3MA%3d&risl=&pid=ImgRaw&r=0"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/02/a0/52/20/guest-room.jpg"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://www.atrapalo.com/hoteles/picture/l/155/2/2/413751324.jpg"
                  width="100%"
                  height={225}
                />
                <div className="card-body" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container jumbotron text-center bg-primary">
        <h1 style={{ color: "blanchealmond" }}>Love From Our Customers</h1>
        <h5 style={{ color: "blanchealmond" }}>Explore what are customer have to say about our service.</h5>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="100%"
                  height={225}
                />
                <div className="card-body">
                  <p className="card-text">
                    It was a pleasure staying at this Brand new property, which is 5
                    minutes walking from the Mall. It is a nice hotel with excellent
                    food and service. They offer complementary fruit, chocolates and
                    coffee in the room. Breakfast is good and you can choose: Indian,
                    continental, etc. Also the restaurant is very good and reasonably
                    priced. Overall the experience was brilliant and enjoyed or
                    weekend getaway a lot. I will definitely stay there again.
                  </p>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%"
                  height={225}
                />
                <div className="card-body">
                  <p className="card-text">
                  Stay was comfortable and the superior room was decent in size with a balcony. The view from the balcony was scenic and we could feel the nature and peace throughout our stay. The breakfast buffet was tasty with good quality and hygiene. The staff was friendly and helpful.The hotels location is pretty good. It's a short comfortable walk to the mall Road.The rooms are very well made, the deluxe rooms balconies have great views. The bathrooms are spacious too.
                  </p>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>

      <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%"
                  height={225}
                />
                <div className="card-body">
                  <p className="card-text">
                    Warm hospitality,clean and heritage property, large breakfast spread,delectable meals, servile and smiling staff.
                    The whole ambience was heritage with warm hues of crimson and blues.
                    The rooms had a breathtaking view of the mountains and the town beyond.
                    Maintained and clean bathrooms.
                    Alert and prompt service staff made our stay very comfortable and memorable.
                    Looking forward to being back soon. Big advantage is the location.
                  </p>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};
export default Gallery;