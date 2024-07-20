import React, { useState } from "react";
import classes from "./Wishlist.module.css";
import PageHeader from "../../components/pageHeader/pageHeader";
import InstaFooter from "../../components/InstaFooter/InstaFooter";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      name: "Berry Delight",
      scent: "Berry",
      price: 151.29,
      stock: "Out Of Stock",
      image: ["/images/example.jpg", "/images/example2.jpg"],
    },
    {
      name: "Minty Fresh",
      scent: "Mint",
      price: 131.59,
      stock: "In Stock",
      image: [ "/images/example2.jpg", "/images/example.jpg"],
    },
  ]);
  return (
    <>
      <PageHeader pagename={"Wishlist"} />
      <div className={`${classes.WishlistPage}`}>
        <table className={`${classes.WishlistTable}`}>
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>UNIT PRICE</th>
              <th>STOCK STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wishlist.length > 0 ? (
              wishlist.map((wish, index) => (
                <tr key={index}>
                  <td>
                    <div>
                      <img
                      className={`${classes.WishlistImage}`}
                        variant="top"
                        src={wish.image[0]}
                        alt="imageNotAvailable"
                      />

                      {wish.name}
                    </div>
                  </td>
                  <td>{wish.price}</td>
                  <td>{wish.stock}</td>
                  <td className={`${classes.addToCart}`}>Add to Cart</td>

                </tr>
              ))
            ) : (
              <tr>No products added</tr>
            )}
          </tbody>
        </table>

        <InstaFooter/>
      </div>
    </>
  );
};

export default Wishlist;
