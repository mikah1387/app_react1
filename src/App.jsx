import { Fragment, useState } from "react"
const produits = [
  {
      categorie: 'Electronique',
      name: 'Smartphone',
      price: 699,
      stock: 50
  },
  {
      categorie: 'Electronique',
      name: 'Télévision',
      price: 999,
      stock: 30
  },
  {
      categorie: 'Electronique',
      name: 'Ordinateur portable',
      price: 1200,
      stock: 0
  },
  {
      categorie: 'Electronique',
      name: 'Tablette',
      price: 400,
      stock: 60
  },
  {
      categorie: 'Electronique',
      name: 'Casque audio',
      price: 150,
      stock: 100
  },
  {
      categorie: 'Vêtements',
      name: 'T-shirt',
      price: 20,
      stock: 0
  },
  {
      categorie: 'Vêtements',
      name: 'Jeans',
      price: 40,
      stock: 150
  },
  {
      categorie: 'Vêtements',
      name: 'Veste',
      price: 60,
      stock: 80
  },
  {
      categorie: 'Vêtements',
      name: 'Chaussures',
      price: 80,
      stock: 120
  },
  {
      categorie: 'Vêtements',
      name: 'Chapeau',
      price: 15,
      stock: 50
  }
];


function App() {

  return <>
      
      <ProductTable products={produits}/>
   
    </>
  

 
}


function InputProduct({product, setProducts}) {

      
  return <>
     <input type="text"  value={product} onChange={(e) => setProducts(e.target.value)}/>
  </>
}

function Checkbox(  {isChecked, setIsChecked} ) {

 return <>
         <div>
     <label >
     <input type="checkbox"  checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
      N'affiche que les produits en stock
     </label>
  </div>
 </>
}

function ProductTable({products}) {
  const[isChecked, setIsChecked] = useState(false);
  const [productinput, setProducts] = useState('');

  const filteredProducts = isChecked ?  products.filter(produit => produit.stock > 0)
  : products;
  return <>

    <InputProduct product={productinput} setProducts={setProducts} />
   <Checkbox isChecked={isChecked} setIsChecked={setIsChecked}/>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Stock</th>
         
        </tr>
      </thead>
      <tbody>
  
        
       <ProductCategorieRow categorie='Electronique'/> 
        {filteredProducts.filter(product => product.categorie === 'Electronique' &&product.name.includes(productinput) ).map((product,index) => <ProductRow product={product} key={index}/>) }
        <ProductCategorieRow categorie='Vêtements'/> 
        {filteredProducts.filter(product => product.categorie === 'Vêtements' && product.name.includes(productinput)).map((product,index) => <ProductRow product={product} key={index}/>) }
     
      </tbody>
    </table>
  </>

}

function ProductCategorieRow({categorie}) {

  return <>
    <tr>
      <th>{categorie}</th>

    </tr>
  </>
}
function ProductRow({product,index}) {

  return <>
    <tr key={index}>
      <td>{product.name}</td>
      <td>  {product.price}</td>
      <td>  {product.stock}</td>
    </tr>
  </>
}
export default App
