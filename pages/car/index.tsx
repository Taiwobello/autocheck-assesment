import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { getAllCars, getCarDetails } from "../../utils/helpers/data/car";
import { CarDetails } from "../../utils/helpers/types/Car";
import styles from "./car.module.scss";
import { useRouter } from "next/router";

interface CarPageProps {
  car: CarDetails;
}

const CarDetails = (props: CarPageProps) => {
  const { query } = useRouter();
  const { carId } = query;

  const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCarDetails = async () => {
    setLoading(true);
    const { data, error, message } = await getCarDetails(carId as string);

    if (error) {
      console.error(`Unable to fetch car detail "${carId}": ${message}`);
    } else {
      setCarDetails(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCarDetails();
  }, [carId]);

  if (loading) {
    return (
      <div className="full-width center">
        <img src="images/loader.svg" />
      </div>
    );
  }

  return (
    <main>
      <img src={carDetails?.imageUrl} className={styles["hero-image"]} />
      <div className="banner-bootom-w3-agileits py-5">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>C</span>ar
            <span>D</span>etails
          </h3>
          <div className="row">
            <div className="col-lg-5 col-md-8 single-right-left ">
              <img src={carDetails?.imageUrl} className={styles["car-image"]} />
            </div>

            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
              <h3 className="mb-3">{carDetails?.name}</h3>
              <p className="mb-3">
                <span className="item_price">₦{carDetails?.price}</span>
                <del className="mx-2 font-weight-light">₦{carDetails?.oldPrice}</del>
              </p>
              <div className="single-infoagile">
                <ul>
                  <li className="mb-3">{carDetails?.fuelType}</li>
                  <li className="mb-3">{carDetails?.condition}</li>
                  <li className="mb-3">
                    {carDetails?.city}, {carDetails?.state}, {carDetails?.country}
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
