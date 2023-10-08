import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";
const Carousels = () => {
  return (
    <>
      <div className={styles.carouselBack}>
        <Carousel>
          <Carousel.Item>
            <img
              className={styles.Carousel}
              src="https://img.global.news.samsung.com/in/wp-content/uploads/2019/09/Screen-1-01-1024x578.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.Carousel}
              src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/Master-banner-Horizontal.jpg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.Carousel}
              src="https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?w=996&t=st=1688722073~exp=1688722673~hmac=14d70626bb94ba62e9d4a0ec0d0a75d182d308ab958a46f535e551c119de0e4c"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default Carousels;
