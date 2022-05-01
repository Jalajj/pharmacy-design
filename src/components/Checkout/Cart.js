import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className={'cart'}>
      <div className={'flexWrapperOne-cart'}>
        <p className={'freeDeliveryForOrdersOver499 m-auto'}>
          Free delivery for orders over ₹499{" "}
        </p>
      </div>
      <div className={'flexWrapperTwo-cart'}>
        <p className={'yourOrder'}>Your Order</p>
        <div className={'flexWrapperSeven-cart'}>
          <div className={'flexWrapperThree-cart'}>
            <div
              className={'screenshot20220405At10051'}
            />
          </div>
          <div className={'flexWrapperEleven-cart'}>
            <div className={'flexWrapperFour-cart'}>
              <img
                alt=""
                className={'screenshot20220405At10101'}
                src="https://static.overlay-tech.com/assets/0f230b0a-a5aa-41bd-822b-ec0866945ea5.png"
              />
              <p className={'prescriptionRequired-cart'}>
                Prescription Required
              </p>
            </div>
            <p className={'dolo650Tablet-cart'}>
              Dolo 650 Tablet
            </p>
            <div className={'flexWrapperTwelve-cart'}>
              <p className={'microLabsLtd'}>
                Micro Labs Ltd
              </p>
              <p className={'num20Tablets-cart'}>
                20 tablets
              </p>
            </div>
            <p
              className={
               ' saltCompositionParacetamol650mg-cart'
              }
            >
              <strong
                className={
                  'saltCompositionParacetamol650mgEmphasis0-cart'
                }
              >
                Salt Composition:
              </strong>{" "}
              Paracetamol (650mg)
            </p>
          </div>
          <p className={'num7688'}>₹76.88</p>
        </div>
        <div className={'rectangle68-cart'} />
        <div className={'flexWrapperSeven-cart'}>
          <div className={'flexWrapperFive-cart'}>
            <div
              className={'screenshot20220405At10051'}
            />
          </div>
          <div className={'flexWrapperThirteen-cart'}>
            <p className={'crocinAdvance'}>
              Crocin Advance...
            </p>
            <div className={'flexWrapperTwelve-cart'}>
              <p className={'apexLabsLtd'}>
                Apex Labs Ltd
              </p>
              <p className={'num20Tablets-cart'}>
                20 tablets
              </p>
            </div>
            <p
              className={
               ' saltCompositionParacetamol650mgTwo-cart'
              }
            >
              <strong
                className={
                  'saltCompositionParacetamol650mgEmphasis0-cart'
                }
              >
                Salt Composition:
              </strong>{" "}
              Paracetamol (650mg)
            </p>
          </div>
          <p className={'num7688Two'}>₹76.88</p>
        </div>
        <div className={'rectangle69-cart'} />
        <div className={'flexWrapperNine-cart'}>
          <p className={'delivery'}>
            Delivery
            <strong className={'deliveryEmphasis1'}>
              {" "}
            </strong>
          </p>
          <p className={'free'} style={{marginLeft:'12%'}}>Free</p>
        </div>
        <div className={'flexWrapperTen-cart'}>
          <p className={'discount'}>Discount</p>
          <p className={'num20'} style={{marginTop:'-1%'}}>-20%</p>
        </div>
        <div className={'flexWrapperSix-cart'}>
          <p className={'total'}>Total </p>
          <p className={'num456'}>₹456</p>
        </div>
        <div className={'rectangle66'} />
      </div>
    </div>
  );
};

export default Cart;