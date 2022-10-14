import React from "react";
import { GetStaticProps } from "next";
import { getAllCars, getCar } from "../../utils/helpers/data/car";
import { CarDetails } from "../../utils/helpers/types/Car";
import styles from "./car.module.scss";

interface CarPageProps {
  car: CarDetails;
}

const CarDetails = (props: CarPageProps) => {
  const { car } = props;
  return (
    <main>
      <img src={car.imageUrl} className={styles["hero-image"]} />
      <div className="banner-bootom-w3-agileits py-5">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>C</span>ar
            <span>D</span>etails
          </h3>
          <div className="row">
            <div className="col-lg-5 col-md-8 single-right-left ">
              <img src={car.imageUrl} className={styles["car-image"]} />
            </div>

            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
              <h3 className="mb-3">{car.name}</h3>
              <p className="mb-3">
                <span className="item_price">₦{car.price}</span>
                <del className="mx-2 font-weight-light">₦{car.oldPrice}</del>
              </p>
              <div className="single-infoagile">
                <ul>
                  <li className="mb-3">{car.fuelType}</li>
                  <li className="mb-3">{car.condition}</li>
                  <li className="mb-3">
                    {car.city}, {car.state}, {car.country}
                  </li>
                  <li className="mb-3"></li>
                </ul>
              </div>

              <button className={styles.btn}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarDetails;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { carId } = params || {};
  const { data, error, message } = await getCar(String(carId));
  if (error || !data) {
    console.error(`Unable to fetch car detail "${carId}": ${message}`);
    return {
      props: {}
    };
  }
  return {
    props: { car: data }
  };
};

export const getStaticPaths = async () => {
  const { data, error } = await getAllCars();
  const ids = data?.map(car => ({
    params: { carId: car.id }
  }));

  if (error) {
    console.error(`Unable to fetch cars: ${error}`);
    return {
      paths: []
    };
  } else {
    return {
      paths: ids,
      fallback: false
    };
  }
};
