// Corrected import for Link  
import Header from "../Header/Header";
import './HomePage.css'
import groupImage from '../../assets/Group34.png';
import im1 from '../../images/im1.png';
import im2 from '../../images/im2.png';
import im3 from '../../images/im3.png';
import im4 from '../../images/im4.png';
import im5 from '../../images/im5.png';
import im6 from '../../images/im6.png';
import user from '../../images/user.png';
import Footer from "../Footer/Footer";
function HomePage() {
    let cards = [
        {
            img: im1,
            title: 'Kepulauan Wakatobi',
            Rp: 9,
            days: 12
        },
        {
            img: im2,
            title: 'Raja Ampat, Papua Barat',
            Rp: 20,
            days: 14
        },
        {
            img: im3,
            title: 'Taman Nasional Bromo',
            Rp: 9,
            days: 7
        },
        {
            img: im4,
            title: 'Gili Trawangan, Lombok',
            Rp: 6,
            days: 7
        },
        {
            img: im5,
            title: 'Taman Nasional Bunaken',
            Rp: 10,
            days: 9
        },
        {
            img: im6,
            title: 'Taman Nasional Komodo',
            Rp: 7,
            days: 7
        },

    ];
    let comments = [
        {
            img: user,
            username: 'Robert John K.',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        },
        {
            img: user,
            username: 'Robert John K.',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        },
        {
            img: user,
            username: 'Robert John K.',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        },
        {
            img: user,
            username: 'Robert John K.',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        },
        {
            img: user,
            username: 'Robert John K.',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        },
        {
            img: user,
            username: 'Robert John K.',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        },
    ]
    return (
        <>
            <Header />
            <div className="main">
                <h2>
                    Explore the world with a smile..
                </h2>
                <p className="p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                </p>

                <div className="main__search p-1 ps-2">

                    <i className="fa-solid fa-location"></i>
                    <input type="text" placeholder="Search for places to visit" />
                    <button className="btn btn-success">
                        Find trip now
                        <i className="fa-solid fa-search p-2"></i>
                    </button>
                </div>
            </div>

            <section className="home-section2 h-75">
                <div className="container">
                    <div className=" row">
                        <div className="col p-3">
                            <img src={groupImage} className="img rounded-1" alt="" />
                        </div>
                        <div className="col p-2">
                            <p className=" count">
                                Travelers Point
                            </p>
                            <h3>
                                We help to find your dream place
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                            </p>

                            <div className="row">
                                <div className="col-6">
                                    <span className="count">
                                        100+
                                    </span>
                                    <p>
                                        Holiday Package
                                    </p>
                                </div>
                                <div className="col-6">
                                    <span className="count">
                                        172
                                    </span>
                                    <p>
                                        Hotels
                                    </p>
                                </div>
                                <div className="col-6">
                                    <span className="count">
                                        68
                                    </span>
                                    <p>
                                        Elite Transportation
                                    </p>
                                </div>
                                <div className="col-6">
                                    <span className="count">
                                        32M+
                                    </span>
                                    <p>
                                        we help to find your dream place
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-section3 h-100">
                <p className="count"> Top Destination</p>
                <h3>Discover your love</h3>
                <div className="row justify-content-center p-2">
                    {
                        cards.map((card, index) => {
                            return (
                                <>
                                    <div className="card col-lg-3 col-md-3 col-sm-8 shadow-sm p-2 m-1" key={index}>
                                        <img className="card-img" src={card.img} alt={card.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {card.title}
                                            </h5>
                                            <div className="row justify-content-between flex-wrap">
                                                <div className="col-6">
                                                    <span>
                                                        Rp.{card.Rp},5jt
                                                    </span>
                                                </div>
                                                <div className="col-6">
                                                    <span >
                                                        <i className="fa-solid fa-location-arrow p-1"></i>
                                                        {card.days} days for trip
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </section>

            <section className="home-section4">
                <p className="count"> Testimonial</p>
                <h3>What they say about us</h3>
                <div className="container">
                    <div className='row justify-content-center'>
                        {
                            comments.map((comment, index) => {
                                return (
                                    <div className="card col-md-3 shadow m-1 p-2" key={index}>
                                        <div className=" row align-items-center justify-content-start">
                                            <div className="col-2">

                                                <img src={comment.img} className="rounded-circle img-thumbnail" alt={comment.username} />
                                            </div>
                                            <h5 className=" mt-1 col-8">
                                                {comment.username}
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">
                                                {comment.comment}
                                            </p>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default HomePage;