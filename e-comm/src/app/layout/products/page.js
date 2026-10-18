import ProductCard from '@/components/ProductCard.js';
import ProtectedRoutes from '@/components/ProtectedRoutes';
import axios from 'axios';
import React from 'react'

const page = async () => {
    let res = await fetch('https://fakestoreapi.com/products');
    let products = await res.json();
    console.log(products);
  return (
    <ProtectedRoutes>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })
      }
    </div>
    </ProtectedRoutes>
  )
}

export default page