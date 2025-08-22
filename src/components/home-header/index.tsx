import styles from "./home-header.module.css";
import Image from "next/image";
import title from "@/assets/title.svg";
import homeImage from "@/assets/house.png";

export default function HomeHeader() {
  return (
    <div className={styles.homeHeaderContainer}>
      <div className={styles.homeImagesContainer}>
        <div className={styles.homeTitle}>
          <Image src={title} alt="title" />
        </div>
        <div className={styles.homeImage}>
          <Image src={homeImage} alt="homeImage" />
        </div>
      </div>
      <div className={styles.homeContentContainer}>
        <p>
          We, as a brand, turn your dreams into fantastique interiors and
          architectural designs. Our projects inspire the pursuit of your great
          aspirations. We create the alchemy of luxury and the enjoyment of our
          clientèle
        </p>
        <button>All projects</button>
      </div>
    </div>
  );
}
