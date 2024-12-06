import Products from "../datas/product";
import TemplateCard from "./card";


const dataset = Products;


export default function ProductList() {
  return (
    <div className="cards">
      {dataset.map((product) => (
        <TemplateCard
          judul={product.nama}
          image={product.imageURL}
          description={product.deskripsi}
          // button={product.handleClick}
        />
      ))}
    </div>
  );
}
