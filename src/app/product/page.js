import ButtonComponent from "./buttoncomponent";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page() {
  let products = await productList();
  console.log("data", products);
  return (
    <>
      <h1>PRODUCT LIST</h1>
      {products.map((item) => {
        console.log("===>", item.title);
        return (
          <h3 key={item.id} style={{ color: "black" }}>
            Name: {item.title}
            <ButtonComponent price={item.price} />
          </h3>
        );
      })}
    </>
  );
}
