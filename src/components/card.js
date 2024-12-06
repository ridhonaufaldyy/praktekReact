import React from "react";
import { useState } from "react";
import "../App.css";

const TemplateCard = (props) => {
  const [jumlahProduk, setJumlahProduk] = useState(0);
  const [keranjang, setKeranjang] = useState([]);
  const tambahProduk = () => {
    setJumlahProduk(jumlahProduk + 1);
  };

  const kurangProduk = () => {
    if (jumlahProduk > 0) {
      setJumlahProduk(jumlahProduk - 1);
    }
  };

  return (
    <div className="card">
      <div>
        <img
          src={props.image}
          alt=""
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "10px 10px 0px 0px",
          }}
        />
        <div>
          <h4>{props.judul}</h4>
          <p>{props.description}</p>
        </div>
        {jumlahProduk === 0 ? (
            <button
              style={{
                backgroundColor: "rgb(108, 184, 247)",
                color: "white",
                borderRadius: "5px",
                margin: "5px",
                width: "96%",
                
              }}
              className="button"
              onClick={tambahProduk}
            >
              + Keranjang
            </button>
        ) : (
          <div className="card-keranjang jumlah-product">
            <button className="button" onClick={kurangProduk}>
              -
            </button>
            <div>{jumlahProduk}</div>
            <button className="button" onClick={tambahProduk}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;
