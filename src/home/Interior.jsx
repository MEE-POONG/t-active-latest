import React, { Component, Fragment } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot, portfolioSlick2 } from "../page-demo/script";
import ModalVideo from "react-modal-video";

const videoData = [
  {
    videoId: "8wjw0EmQ3c0",
    image: "/assets/images/video/1.png",
  },
  {
    videoId: "rj-96O_OEkU",
    image: "/assets/images/video/2.png",
  },
  {
    videoId: "DOXRbYiqAF8",
    image: "/assets/images/video/3.png",
  },
  {
    videoId: "7K6grz5y7bs",
    image: "/assets/images/video/4.png",
  },
  {
    videoId: "wvxZM6WfqqI",
    image: "/assets/images/video/5.png",
  },
  {
    videoId: "1PdXTH67o_s",
    image: "/assets/images/video/6.png",
  },
  {
    videoId: "jInToeKP6Nk",
    image: "/assets/images/video/7.png",
  },
  {
    videoId: "Qdqc0Hs9HaE",
    image: "/assets/images/video/8.png",
  },
  {
    videoId: "yfX6du1LnZM",
    image: "/assets/images/video/9.png",
  },
  {
    videoId: "k0abhlOvODw",
    image: "/assets/images/video/10.png",
  },
  {
    videoId: "EcjdO7yYfSA",
    image: "/assets/images/video/11.png",
  },
  {
    videoId: "1JWfkfgNSZ8",
    image: "/assets/images/video/12.png",
  },
];
const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Enjoy every moment with",
    description: "Premium sweetness",
    buttonText: "Say Hello With Us",
    buttonLink: "https://t-active-stevia.com",
  },
];
const Portfolio_image = (
  <img
    src="/assets/images/portfolio/interior/portfolio-8.jpg"
    alt="React Creative Agency"
  />
);
const Portfolio_image2 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-9.jpg"
    alt="React Creative Agency"
  />
);
const Portfolio_image3 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-10.jpg"
    alt="React Creative Agency"
  />
);

const Portfolio_image4 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-11.jpg"
    alt="React Creative Agency"
  />
);

const Portfolio_image5 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-12.jpg"
    alt="React Creative Agency"
  />
);

const Portfolio_image6 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-13.jpg"
    alt="React Creative Agency"
  />
);

const Portfolio_image7 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-14.jpg"
    alt="React Creative Agency"
  />
);

const Portfolio_image8 = (
  <img
    src="/assets/images/portfolio/interior/portfolio-15.jpg"
    alt="React Creative Agency"
  />
);

const PortfolioList = [
  {
    image: Portfolio_image,
    category: "",
    title: "",
    description: "",
  },
  {
    image: Portfolio_image2,
    category: "",
    title: "",
    description: "",
  },
  {
    image: Portfolio_image3,
    category: "",
    title: "",
    description: "",
  },
  {
    image: Portfolio_image4,
    category: "",
    title: "",
    description: "",
  },
  {
    image: Portfolio_image5,
    category: "",
    title: "",
    description: "",
  },
  {
    image: Portfolio_image6,
    category: "",
    title: "",
    description: "",
  },
  {
    image: Portfolio_image7,
    category: "",
    title: "",
    description: "",
  },
  {
    image: Portfolio_image8,
    category: "",
    title: "",
    description: "",
  },
];

const PortfolioList2 = [
  {
    image: Portfolio_image,
    category: "Design",
    title: "Landcape Design",
    description:
      "Lorem ipsum dolor sit amet, conse. Lorem ipsum dolor sit amet, conse.",
  },
  {
    image: Portfolio_image2,
    category: "Design",
    title: "Landcape Design",
    description:
      "Lorem ipsum dolor sit amet, conse. Lorem ipsum dolor sit amet, conse.",
  },
  {
    image: Portfolio_image3,
    category: "Interior",
    title: "Home Interior",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse.",
  },
  {
    image: Portfolio_image4,
    category: "Interior",
    title: "Home Interior",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse.",
  },
  {
    image: Portfolio_image5,
    category: "Lighting",
    title: "Bedroom Lighting",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse.",
  },
  {
    image: Portfolio_image6,
    category: "Lighting",
    title: "Bedroom Lighting",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, conse.",
  },
  {
    image: Portfolio_image7,
    category: "Lighting",
    title: "Bedroom Lighting",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse.",
  },
  {
    image: Portfolio_image8,
    category: "Lighting",
    title: "Bedroom Lighting",
    description:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, conse.",
  },
];

const ServiceListOne = [
  {
    icon: "icon-01.png",
    title: "Zero Sugar",
    description:
      "Sugar reduction from 45% and 100% without losing functionality.",
  },
  {
    icon: "icon-02.png",
    title: "Zero Calorie",
    description:
      "stevia contains zero calories and can be up to 400 times sweeter than traditional sugar.",
  },
  {
    icon: "icon-03.png",
    title: "Zero Sodium",
    description:
      "Nullam aliquet erat vitae lorem egestas, vel viverra lorem egestas",
  },
];

class InteriorLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);

    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  stickyHeader() {}
  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 50) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="T-Active Stevia Syrup" />

        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed default-color one-page-navigation">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    className="logo-1"
                    src="/assets/images/logo/logo-light.png"
                    alt="Logo Images"
                  />
                  <img
                    className="logo-2"
                    src="/assets/images/logo/logo-all-dark.png"
                    alt="Logo Images"
                  />
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={[
                    "home",
                    "service",
                    "getstart",
                    "about",
                    "team",
                    "testimonial",
                    "portfolio",
                  ]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#service">Service</a>
                  </li>
                  <li>
                    <a href="#getstart">Get Start</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#team">Inventor</a>
                  </li>
                  <li>
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                </Scrollspy>
              </nav>
              <div className="header-btn">
                <a
                  className="btn-default btn-border btn-opacity"
                  href="https://t-active-by-sugavia.com"
                >
                  <span>contact</span>
                </a>
              </div>
              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className="slider-activation im_modern_slider" id="home">
          <div className="bg_image bg_image--29" data-black-overlay="5">
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner pt_sm--40 ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title">{value.title}</h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="btn-default btn-large"
                              href={`https://t-active-stevia.com`}
                            >
                              {value.buttonText} https://t-active-stevia.com/
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area   */}

        <div
          Style={`
    position: absolute;
    margin-top: -100px;
    z-index: 1;
    max-width: 500px;
    right: 0;
    `}
        >
          <img src="/assets/images/logo/home_tea3_pic2.png" />
        </div>

        {/* Start Service Area  */}
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-8">
                <div className="feature-area">
                  <span className="subtitle theme-gradient">FUTURES</span>
                  <h3 className="title mt--20 fontWeight500 lineheight--1-8">
                    Stevia is rich in antioxidants and other glycoside compounds
                    that, in themselves, help eliminate free radicals in the
                    body. elementum aliquam tristique.
                  </h3>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ServiceListOne.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={i}
                >
                  <a href="#service">
                    <div className="service service__style--1">
                      <div className="icon">
                        <img
                          src={`/assets/images/icons/${val.icon}`}
                          alt="Service Icon"
                        />
                      </div>
                      <div className="content mt--20">
                        <h4 className="title">{val.title}</h4>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area pb--120 bg_color--1">
          <div className="container">
            <div className="row mt_dec--30">
              {PortfolioList.map((value, index) => (
                <div className="col-lg-6 col-md-6 col-12 mt--30" key={index}>
                  <div className="im_portfolio">
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a href="#service">{value.image}</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <div className="portfolio_heading">
                          <div className="category_list">
                            <a href="#service">{value.category}</a>
                          </div>
                          <h4 className="title">
                            <a href="#service">{value.title}</a>
                          </h4>
                        </div>
                        <div className="portfolio_hover">
                          <p>{value.description}</p>
                        </div>
                      </div>
                    </div>
                    <a className="transparent_link" href="#service"></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Call To Action Area  */}
        <div
          className="call-to-action-wrapper call-to-action callto-action-style-2 text-white-wrapper"
          id="getstart"
        >
          <div
            className="bg_image bg_image--30 ptb--200 ptb_lg--80 ptb_md--80 ptb_sm--80"
            data-black-overlay="5"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner text-center">
                    <h2>100%</h2>
                    <p>N A T U R A L &nbsp;&nbsp; P R O D U C T</p>
                    <a
                      className="btn-default btn-large btn-hover-white mt--50 mt_sm--30 mt_md--30"
                      href="https://t-active-stevia.com/"
                    >
                      <span>Purchase T-Active</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Call To Action Area  */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1">
          <div className="container">
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Content Box  */}
        <div
          className="rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1"
          id="about"
        >
          <div className="row row--0 align-items-center">
            <div className="col-lg-12 col-xl-4">
              <div className="">
                <img
                  src="/assets/images/featured/featured-01.png"
                  alt="Featured Images"
                />
              </div>
            </div>
            <div className="col-lg-12 col-xl-8 mt_lg--50 mt_md--30 mt_sm--30">
              <div className="content">
                <div className="about-inner inner">
                  <div className="section-title">
                    <span className="subtitle">
                      W H A T &nbsp; &nbsp; I S &nbsp; &nbsp; S T E V I A ?{" "}
                    </span>
                    <h2 className="title">S T E V I A </h2>
                    <p className="description">
                      {" "}
                      S T E V I A is a natural sweetener and sugar substitute
                      derived from the leaves of the plant species Stevia
                      rebaudiana, native to Brazil and Paraguay.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="about-us-list">
                        <h5 className="title">Not destroy health</h5>
                        <p>Stevia is a natural not destroy health.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="about-us-list">
                        <h5 className="title">
                          Helps lower bad LDL cholesterol
                        </h5>
                        <p>
                          Stevia is a natural helps lower bad LDL cholesterol.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="about-us-list">
                        <h5 className="title">Aids in weight loss</h5>
                        <p>Stevia is a natural aids in weight loss.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="about-us-list">
                        <h5 className="title">Suitable for diabetics</h5>
                        <p>Stevia is a natural suitable for diabetics.</p>
                      </div>
                    </div>
                  </div>
                  <div className="purchase-btn mt--50">
                    <a
                      className="btn-transparent"
                      href="https://t-active-stevia.com/"
                    >
                      WHY WE'RE DIFFERNT VALUES
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Content Box  */}

        {/* Start Team Area  */}
        <div className="rn-team-wrapper pb--120 bg_color--1" id="team">
          <div className="rn-team-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="section-title text-left mb--30">
                    <span className="subtitle">Our Experts</span>
                    <h2 className="title">Meet Our Inventor</h2>
                    <p className="description">
                      I am Tianna When I was 10, everyday after school, I’d go
                      straight to YouTube and watch Victoria Secret models
                      working out. I idolized their physical appearances,
                      failing to acknowledge the negative impacts or safety of
                      these restrictive diets and workouts. From there it
                      escalated to an extremely unhealthy relationship with food
                      and exercise. The summer going into 8th grade, I told
                      myself I needed to lose weight. It was a success; however,
                      I did this in the most unhealthy way possible. That was
                      the advent of my eating disorder. All of 8th grade, I set
                      an alarm for 4:35am. From there, I’d go downstairs and
                      start my workout. Doing rigorous cardio for 45 minutes
                      straight, then proceeding to run on the treadmill for
                      another 30 minutes. I never let myself stop until I felt
                      “dead” on the inside. I completed this 3 times a day,
                      before and after school, as well as an hour after dinner.
                      Everyone around me gave up on helping me. I ended up
                      losing a majority of my friends, even my old teachers lost
                      hope. During school I would leave lunch early to go run up
                      and down the stairs in the hallways, I ran to every class
                      in hopes of “burning extra calories”. It was absolutely
                      miserable.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className={`col-12`} key={i}>
                      <div className={`team team-style--bottom`}>
                        <div className="thumbnail">
                          <img
                            className="w-100"
                            src={`/assets/images/about/19.jpg`}
                            alt="Blog Images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className={`col-12`} key={i}>
                      <div className={`team team-style--bottom`}>
                        <div className="thumbnail">
                          <img
                            className="w-100"
                            src={`/assets/images/about/4.jpg`}
                            alt="Blog Images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="section-title text-left mb--30">
                    <h2 className="title">&nbsp;</h2>
                    <p className="description">
                      I even lied to my teachers saying I had a “knee injury”
                      and I wasn’t able to sit down during class. For 2 years
                      straight I would stand in the back of the class, as I
                      thought sitting would have negative effects. To say the
                      least I was brainwashed, all of my fears were just
                      absolute BS; but I thought that was what I needed to do in
                      order to “stay thin”. I felt alone and helpless, not only
                      did my actions effect myself negatively, I was hurting the
                      people around me. I honestly think that was my breaking
                      point. I thought about my family, about how my little
                      cousins (who had once looked up to me) now feared the
                      person I became. I thought about all the friends I had
                      lost, and all the trust I lost among people who used to
                      surround themselves around me. I didn’t know how to fix
                      all the damage I had caused; but I knew I needed to get
                      myself out of that situation. I needed to fix my mindset
                      and I did so by establishing my purpose. I wanted change
                      more than I wanted comfort, so I got to work. Through
                      years of trial and error I finally understood what I
                      needed to do to truly find happiness
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="section-title text-left mb--30">
                    <h2 className="title">&nbsp;</h2>
                    <p className="description">
                      {" "}
                      I was responsible for my life. I needed to change my
                      mentality and approach everything in a whole new way.
                      Through months and months of educating myself, learning
                      from professional trainers, and working with my doctor, I
                      felt somewhat confident in my recovery. I finally felt
                      ready to tackle my relationship with working out. To say
                      the least, I was still very much traumatized from all
                      those years of torturous exercise. However, I knew my
                      goals had altered and I wanted to grow, both physically
                      and mentally. I began idolizing strong athletes and
                      Olympic weightlifters. I found the beauty in self-
                      discipline and pushing yourself to do better. I learned
                      that when your getting your life together, it will get
                      lonely. It was a long process of listening to the wrong
                      people, doing “hourglass ab” workouts from uncertified
                      fitness influencers, and taking in advice from people who
                      didn’t actually understand the human body or anatomy.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className={`col-12`} key={i}>
                      <div className={`team team-style--bottom`}>
                        <div className="thumbnail">
                          <img
                            className="w-100"
                            src={`/assets/images/about/8.jpg`}
                            alt="Blog Images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="row">
                    <div className={`col-12`} key={i}>
                      <div className={`team team-style--bottom`}>
                        <div className="thumbnail">
                          <img
                            className="w-100"
                            src={`/assets/images/about/3.jpg`}
                            alt="Blog Images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="section-title text-left mb--30">
                    <h2 className="title">&nbsp;</h2>
                    <p className="description">
                      {" "}
                      But looking back now, would I have changed a thing? The
                      answer is absolutely not! I’m glad I was able to learn and
                      differentiate between propaganda and the actual science.
                      With all the knowledge I’ve obtained, I was confident and
                      motivated to proceed in my next step to recovery. Flashing
                      forward to today, I’ve been lifting weights for 3 years
                      now. Focusing on progressive overload and training using
                      both bodybuilding and powerlifting mechanisms. Now my goal
                      is to inspire people to face their fears and approach on
                      health/fitness. The truth of the matter is, working out
                      shouldn’t be something you dread. Yes, you will have days
                      where you’re unmotivated, and yes, some days are way
                      harder than others. But that’s okay, the most successful
                      people are the ones who get up and get to work, even on
                      the days they’re not motivated. Everyone’s journey is
                      different, and I’m still at the start of mine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="section-title pt-5 mt-5">
                <span className="subtitle">Our Gallery</span>
                <h2 className="title">Gallery Our Inventor</h2>
                <TeamOne
                  column="col-lg-3 col-md-6 col-sm-6 col-12"
                  teamStyle="team-style--bottom"
                  item="20"
                />
              </div>

              <div className="section-title pt-5 mt-5">
                <span className="subtitle">Our Video</span>
                <h2 className="title">Video Our Inventor</h2>

                <div className="rn-service-details pb--120 bg_color--1">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="service-details-inner">
                          <div className="inner">
                            <div className="row row--35 sercice-details-content align-items-center">
                              {videoData.map((data, i) => (
                                <div className="col-lg-4 col-12 mt--30">
                                  <div className="thumb position-relative">
                                    <img
                                      className="w-100"
                                      src={data.image}
                                      alt="Service Images"
                                    />
                                    <ModalVideo
                                      channel="youtube"
                                      isOpen={this.state.isOpen}
                                      videoId={data.videoId}
                                      onClose={() =>
                                        this.setState({ isOpen: false })
                                      }
                                    />
                                    <button
                                      className="video-popup theme-color"
                                      onClick={this.openModal}
                                    >
                                      <span className="play-icon"></span>
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div
          className="rn-testimonial-area bg_color--5 ptb--120"
          id="testimonial"
        >
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_color--1" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title text-left mb--30">
                  <span className="subtitle">Our Recent Works</span>
                  <h2 className="title">All Works</h2>
                  <p className="description">
                    There are many variations of passages of T-Active Stevia
                    Syrup available, enjoy every moment with Premium sweetness
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper portfolio-sacousel-inner mb--55">
            <div className="portfolio-slick-activation mt--30 mt_sm--30">
              <Slider {...portfolioSlick2}>
                {PortfolioList2.map((value, index) => (
                  <div className="im_portfolio" key={index}>
                    <div className="thumbnail_inner">
                      <div className="thumbnail">
                        <a to="/">{value.image}</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="inner"></div>
                    </div>
                    <Link className="transparent_link" to="/"></Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Footer Style  */}
        {/* <FooterTwo /> */}
        {/* End Footer Style  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default InteriorLanding;
