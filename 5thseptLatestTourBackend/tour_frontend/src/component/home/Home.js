import React, { useContext, useEffect, useState } from 'react';
// import { SearchContext } from './SearchContext';
// import ScrollCarouselCard from './ScrollCarouselCard';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
// import { useTranslation } from 'react-i18next';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// // Import translation files
// import enTranslation from './locales/en.json';
// import hiTranslation from './locales/hi.json';




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination } from "swiper";
import Styles from "./home.module.css";
import asam from "../image/asam.jfif"
import oddisa from "../image/oddisa.jfif"
import andhra from "../image/andhra.jpg"
import list from "../image/list.jpg"
import charminar from '../pic/BannerTelangana.jpg';
import { Link } from "react-router-dom";

import pic01 from './picss/pic01.webp';
import pic02 from './picss/pic02.jpeg';
import pic03 from './picss/pic03.jpeg';
import pic04 from './picss/pic04.jpeg';
import pic05 from './picss/pic05.jpeg';
import pic06 from './picss/pic06.jpeg';
import pic07 from './picss/pic07.jpeg';
import pic08 from './picss/pic08.jpeg';


import w1 from "../images/wb1.jpg"
import w2 from "../images/wb2.jpg"
import w3 from "../images/wb3.jpg"
import w4 from "../images/wb4.jpg"

import r1 from "./img/r1.jpg"
import r2 from "./img/r2.jpg"
import r3 from "./img/r3.jpg"
import r4 from "./img/r4.jpg"
import ut1 from "./img/ut1.jpg"
import ut2 from "./img/ut2.jpg"
import ut3 from "./img/ut3.jpg"
import ut4 from "./img/ut4.jpg"

import kn1 from "./img/k1.jpg"
import kn2 from "./img/kn2.jpg"
import kn3 from "./img/kn3.jpg"
import kn4 from "./img/kn4.jpg"

import placeAssam from '../images/placeAssam.jpg';
import wildAssam from '../images/wildAssam.webp';
import templeAssam from '../images/templeAssam.jpg';
import hillAssam from '../images/hillAssam.webp';

import odibeach from '../images/odibeach.jpg'
import odihill from '../images/odihill.jpg'
import odiplace from '../images/odiplace.webp';
import oditemple from '../images/oditemple.jpg'


//andhra

import pics1 from '../pic/MuseumsTel.webp';
import pics2 from '../pic/templeTelanglana.jpg';
import pics3 from '../pic/ramuji.jpg';

//telangana

import tel1 from '../pic/PalacesTelanagana.jpg';
import tel2 from '../pic/WaterfallsTelangana.jpg';
import tel3 from '../pic/BannerTelangana.jpg';

//chhattisgarh
import chhattisgarh1 from '../Chhattisgarh/pic/Chitrakot_waterfalls.jpeg';
import chhattisgarh2 from '../Chhattisgarh/pic/EvnJ4pyVoAgF9_W.jpg';
import chhattisgarh3 from '../Chhattisgarh/pic/download.jpeg';




//goa

import goa1 from '../picc/p1.jpg';
import goa2 from '../picc/p2.jpg';
import goa3 from '../picc/p3.jpg';

//kerala
import kera1 from '../picc/p4.jpg';
import kera2 from '../picc/p5.jpg';
import kera3 from '../picc/p6.jpg';

//mp
import mp1 from '../mp/photos/mpWild.jpg';
import mp2 from '../mp/photos/mpmousem.jpg';
import mp3 from '../mp/photos/mppalce.jpg'

//maha
import maha1 from '../Maharastra/Photo/Victoria_Terminus,_Mumbai.jpg';
import maha2 from '../Maharastra/Photo/flimcity.jpg';
import maha3 from '../Maharastra/Photo/mahaBeaches.jpg';


//sikkim

import sik1 from '../Sikkim/img/pic001.jpg';
import sik2 from '../Sikkim/img/pic002.jpg';
import sik3 from '../Sikkim/img/pic004.jpg';

//tn
import tn1 from '../Tamil Nadu/img/pic0010.jpg';
import tn2 from '../Tamil Nadu/img/pic003.jpg';
import tn3 from '../Tamil Nadu/img/pic005.jpg';


//bihr

import bihar1 from "../images/bihar1.jpg"
import bihar2 from "../images/bihar2.jpg"
import bihar3 from "../images/bihar3.jpg"

//Andaman

import Andaman1 from "../Andaman/pic/360_F_397037457_aQaV8mq4VieHtt6OVdLMZw6StZeKSLtt.jpg"
import Andaman2 from "../Andaman/pic/andaman-nicobar-island-1.jpg"
import Andaman3 from "../Andaman/pic/andaman-nicobar-island-2.jpg"

//jharkhand
import khand from "../images/khand.jpg"
import khand2 from "../images/khand2.jpg"
import khand3 from "../images/khand3.jpg"

import aru1 from "../Arunachal Pradesh/aurnchalpic/Nuranang-Falls_2nd-mar.webp"
import aru2 from "../Arunachal Pradesh/aurnchalpic/temple.jpg"

import naga1 from "../Nagaland/nagapic/forest.jpg"
import naga2 from "../Nagaland/nagapic/lake.jpg"
import naga3 from "../Nagaland/nagapic/mounatin.png"

import { Swiper, SwiperSlide } from "swiper/react";

import { animateScroll as scroll } from 'react-scroll';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import ScrollAd from './ScrollAd/ScrollAd';
import Musicpage from './music/Musicpage';
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {

  useEffect(() => {
    loadslider();
  }, [])
  const [images, setImages] = useState();
  console.log(images);
  const loadslider = async () => {

    const { data } = await axios.post(`http://localhost:4000/slider/getAll`,
    )
    console.log(data.status, "jk");
    if (data.status === true) {
      console.log(data.data, "data")
      setImages(data.data);
    }
    else {
      console.log(data.message, "datahjbhkb")

    }

  };
  //  const images = [pic01,pic03,pic04,pic05,pic06,pic07,pic08]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const card = [
    {
      name: "Andhra:Trip",
      price: "from 9,883 per adult",
      image: [pics1, pics2, pics3],
      link: 'andhra'
    },
    {
      name: "Arunachal Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [aru1, aru2, khand3],
      link: 'arunachalPradesh'
    },
    {
      name: "Assam:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'assam'
    },
    {
      name: "Bihar:Trip",
      price: "from 9,883 per adult",
      image: [bihar1, bihar2, bihar3],
      link: 'bihar'
    },
    {
      name: "Chhattisgarh:Trip",
      price: "from 9,883 per adult",
      image: [chhattisgarh1, chhattisgarh2, chhattisgarh3]
      ,
      link: 'Chhattisgarh'
    },
    {
      name: "Goa:Trip",
      price: "from 9,883 per adult",
      image: [goa1, goa2, goa3],
      link: 'goa'
    },
    {
      name: "Gujarat:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'Gujarat'
    },
    {
      name: "Haryana:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'Haryana'
    },

    {
      name: "Himachal Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [placeAssam, wildAssam, templeAssam, hillAssam]
      ,
      link: 'Himachal'
    },
    {
      name: "Jharkhand:Trip",
      price: "from 9,883 per adult",
      image: [khand, khand2, khand3],
      link: 'jhharkhand'
    },
  
    {
      name: "Karnataka:Trip",
      price: "from 9,883 per adult",
      image: [kn1, kn2, kn3, kn4],
      link: 'bangalore'
    },

 
    {
      name: "Kerala:Trip",
      price: "from 9,883 per adult",
      image: [kera1, kera2, kera3],
      link: 'kerala'
    },
    {
      name: "Madhya Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [mp1, mp2, mp3],
      link: 'mP'
    },
    {
      name: "Maharastra:Trip",
      price: "from 9,883 per adult",
      image: [maha1, maha2, maha3],
      link: 'maharashtra'
    },
    {
      name: "Manipur:Trip",
      price: "from 9,883 per adult",
      image: [mp1, mp2, mp3],
      link: 'Manipur'
    },
    {
      name: "Meghalaya:Trip",
      price: "from 9,883 per adult",
      image: [maha1, maha2, maha3],
      link: 'Meghalaya'
    },
    {
      name: "Mizoram:Trip",
      price: "from 9,883 per adult",
      image: [maha1, maha2, maha3],
      link: 'Mizoram'
    },
    {
      name: "nagaland:Trip",
      price: "from 9,883 per adult",
      image: [naga1, naga2, naga3],
      link: 'Nagaland'
    },
    {
      name: "Oddisa:Trip",
      price: "from 9,883 per adult",
      image: [odibeach, odihill, odiplace, oditemple],
      link: 'odisha'
    },
    {
      name: "Punjab:Trip",
      price: "from 9,883 per adult",
      image: [odibeach, odihill, odiplace, oditemple],
      link: 'Punjab'
    },
    {
      name: "Rajsthan:Trip",
      price: "from 9,883 per adult",
      image: [r1, r2, r3, r4],
      link: 'rajsthan'
    },
    
   
    {
      name: "Sikkim:Trip",
      price: "from 9,883 per adult",
      image: [sik1, sik2, sik3],
      link: 'sikkim'
    },
    {
      name: "Tamil Nadu :Trip",
      price: "from 9,883 per adult",
      image: [tn1, tn2, tn3],
      link: 'tamilNadu'
    },
    {
      name: "Telangana:Trip",
      price: "from 9,883 per adult",
      image: [tel1, tel2, tel3],
      link: 'telangana'
    },
    {
      name: "Tripura :Trip",
      price: "from 9,883 per adult",
      image: [tn1, tn2, tn3],
      link: 'Tripura'
    },
    {
      name: "Uttarakhand:Trip",
      price: "from 9,883 per adult",
      image: [ut1, ut2, ut3, ut4],
      link: 'uttarakhand'
    },
   
 
    {
      name: "Uttar Pradesh:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'uttar'
    },
    {
      name: "West Bengal:Trip",
      price: "from 9,883 per adult",
      image: [w2, w1, w3, w4],
      link: 'westBengal'
    },


    {
      name: "Jammu & Kasmir:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Dadra and Nagar Haveli and Daman & Diu.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'jammu'
    },
   
    {
      name: "Ladakh.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'Ladakh'
    },
   
    {
      name: "Chandigarh.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'Chandigarh'
    },
   
    {
      name: "Delhi.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'Delhi'
    },
   
    {
      name: "Puducherry.:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'Puducherry'
    },
   
    {
      name: "Lakshadweep:Trip",
      price: "from 9,883 per adult",
      image: [asam, oddisa, andhra, charminar],
      link: 'Lakshadweep'
    },
   
    {
      name: "Andaman and Nicobar Islands:Trip",
      price: "from 9,883 per adult",
      image: [Andaman1, Andaman2, Andaman3],
      link: 'Andaman'
    },
   

  ]

  console.log(localStorage)
  const ScrollCarouselCard = ({ name, price, link, image }) => {
    return (
      <div className={Styles.scontainer}>
        <div className={Styles.scroll}>
          <Link to={link}>
            <span>
              <Swiper pagination={{
                clickable: true,
              }} navigation={true} modules={[Navigation, Pagination]} className={Styles.mys}>

                {image.map((image, index) => (
                  <div className={Styles.cardimg}>
                    <SwiperSlide>
                      <img key={index} src={image} alt={`Image ${index + 1}`} className={Styles.imgs} />
                    </SwiperSlide>
                  </div>


                ))}

              </Swiper>


            </span>
            <div className={Styles.textContainer}>
              <div className={Styles.carouselTextName}>
                <h2>{name}</h2>
              </div>
              <div className={Styles.carouselTextPrice}>
                <p>{price}</p>
              </div>
            </div>

          </Link>

        </div>
      </div>
    )
  }

  const searchQuery = useSelector((state) => state.searchQuery);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const filtered = card.filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchQuery]);

  // i18n.use(initReactI18next).init({
  //   resources: {
  //     en: { translation: enTranslation },
  //     hi: { translation: hiTranslation }
  //   },
  //   fallbackLng: 'en',
  //   interpolation: {
  //     escapeValue: false
  //   }
  // });


  // const { t } = useTranslation();

  //   const changeLanguage = (lng) => {
  //     i18n.changeLanguage(lng);
  //   };




  return (
    <>
      <div className={Styles.slide} >
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: 0,
            right: 0,
            width: '120%',
            height: '120%',
            overflow: 'hidden',
            zIndex: -1, // Set a negative z-index to place it at the background
          }}
        >
          <Slider {...settings}>
            {images && images.map((image) => (
              <div key={image._id} style={{ height: '560px', width: '90%' }}>
                <img
                  src={`http://localhost:4000/slider/${image.image_url}`}
                  alt="Image 1"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    margin: 'auto'
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>


      <div className={Styles.hides}>
        <ScrollAd name='home' />
      </div>

      <div className={Styles.socialIcons}>
        <a href='https://www.facebook.com/people/Journey-Recall-India/61550265616986/?sk=about'><FaFacebookSquare style={{ color: 'blue' }} /></a>
        <a href='https://www.instagram.com/rjoindia/?next=%2F' style={{ textDecoration: 'none' }}><FaInstagramSquare className={Styles.myInsta} /></a>
        <a href='https://twitter.com/JROindia'><FaTwitterSquare style={{ color: 'blue' }} /></a>
        <a href='https://api.whatsapp.com/send/?phone=070935 81569&text=Hi&app_absent=0'><FaWhatsappSquare style={{ color: 'green' }} /></a>
      </div>



      {/* 
<div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hi')}>Hindi</button>

      <p>{t('hello')}</p>
    </div> */}




      <div>
        <div className='scrollHeading3'>

        </div>
        <div id='scroll3BtnDiv' >
          {/* <span id='scroll3Btn'>Sell More <FaLongArrowAltRight id='arrowicon'/></span> */}
        </div>
        <div className={Styles.lastcard}>
          {filteredCards.map((card) => (
            <ScrollCarouselCard key={card.name} {...card} />
          ))}
        </div>
      </div>







      <div className={Styles.container}>



        <br />
        <div className={Styles.list}>
          <div className={Styles.lefta}>
            <div className={Styles.text}>
              <h3>Get out there</h3>
              <p>Best of the tours, attractions & activities you won't to miss.</p>
              <button>See the list</button>
            </div>
          </div>
          <div>
            <img width="100%" height='100%' src={list} />
          </div>
        </div>
      </div>




    </>
  )
}

export default Home