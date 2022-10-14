import type { NextPage } from "next";
import styles from "./index.module.scss";

import React, { useEffect, useState } from "react";
import { getAllCars } from "../utils/helpers/data/car";
import { Car } from "../utils/helpers/types/Car";
import Link from "next/link";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<Car[] | null>(null);

  const fetchAllCars = async () => {
    setLoading(true);
    const response = await getAllCars();

    if (response.error) {
      console.log(response.error);
    } else {
      setCars(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllCars();
  }, []);

  return (
    <main>
      <Hero />
      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>O</span>ur
            <span>N</span>ew
            <span>P</span>roducts
          </h3>
          <div className="row">
            <div className="agileinfo-ads-display col-lg-9">
              <div className="wrapper">
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4 center">
                  <h3 className="heading-tittle text-center font-italic">Available Cars</h3>
                  {loading && <img src="images/loader.svg" />}
                  <div className={styles["card-wrapper"]}>
                    {cars?.map(car => (
                      <CarCard car={car} key={car.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
              <div className="side-bar p-sm-4 p-3">
                <div className="search-hotel border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                  <form action="#" method="post">
                    <input type="search" placeholder="Product name..." name="search" />
                    <input type="submit" value=" " />
                  </form>
                </div>
                <div className="range border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Price</h3>
                  <div className="w3l-range">
                    <ul>
                      <li>
                        <a href="#">Under $1,000</a>
                      </li>
                      <li className="my-1">
                        <a href="#">$1,000 - $5,000</a>
                      </li>
                      <li>
                        <a href="#">$5,000 - $10,000</a>
                      </li>
                      <li className="my-1">
                        <a href="#">$10,000 - $20,000</a>
                      </li>
                      <li>
                        <a href="#">$20,000 $30,000</a>
                      </li>
                      <li className="mt-1">
                        <a href="#">Over $30,000</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Discount</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">5% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">10% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">20% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">30% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">50% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">60% or More</span>
                    </li>
                  </ul>
                </div>

                <div className="customer-rev border-bottom left-side py-2">
                  <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>5.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>4.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                        <span>3.5</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>3.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                        <span>2.5</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Electronics</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Cameras &amp; Photography</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Car &amp; Vehicle Electronics</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Computers &amp; Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">GPS &amp; Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Headphones</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Home Audio</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Home Theater, TV &amp; Video</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Mobiles &amp; Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Portable Media Players</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Tablets</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Telephones &amp; Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Wearable Technology</span>
                    </li>
                  </ul>
                </div>

                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Eligible for Cash On Delivery</span>
                    </li>
                  </ul>
                </div>

                <div className="left-side border-bottom py-2">
                  <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Last 30 days</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Last 90 days</span>
                    </li>
                  </ul>
                </div>

                <div className="f-grid py-2">
                  <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                  <div className="box-scroll">
                    <div className="scroll" style={{ top: "-303.05px" }}>
                      <div className="row">
                        <div className="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="images/k1.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <a href="">Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</a>
                          <a href="" className="price-mar mt-2">
                            $12,990.00
                          </a>
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="images/k2.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <a href="">Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</a>
                          <a href="" className="price-mar mt-2">
                            $12,499.00
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="images/k3.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <a href="">Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
                          <a href="" className="price-mar mt-2">
                            $1,199.00{" "}
                          </a>
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
    </main>
  );
};

const Hero = () => {
  return (
    <div className="carousel-item item1 active">
      <div className="container">
        <div className="w3l-space-banner">
          <div className="carousel-caption p-lg-5 p-sm-4 p-3">
            <p>
              Get flat
              <span>10%</span> Cashback
            </p>
            <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">
              The
              <span>Big</span>
              Sale
            </h3>
            <a className="button2" href="product.html">
              Shop Now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CarCardProps {
  car: Car;
}

const CarCard = (props: CarCardProps) => {
  const { title, price, imageUrl, oldPrice, id } = props.car;
  return (
    <Link href={`/car?carId=${id}`}>
      <a className={styles["car-card"]}>
        <img className={styles.image} src={imageUrl} alt="car" />
        <p className={styles.title}>{title}</p>
        <div className="info-product-price my-2">
          <span className="item_price">${price}</span>
          <del>${oldPrice}</del>
        </div>
        <button className={styles.btn}>Add To Cart</button>
      </a>
    </Link>
  );
};

export default Home;
