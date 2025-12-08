import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface BusinessSpecProps {
  businessId: number;
}

const CreateBusinessSpecification: React.FC<BusinessSpecProps> = ({ businessId }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://api.example.com/businesses/${businessId}/products`);
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [businessId]);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="polite">{error}</div>;

  return (
    <div className={clsx('bg-white p-6 rounded-lg shadow-md', 'max-w-screen-sm mx-auto')}>
      <h2 className="text-xl font-bold mb-4">Business Specification</h2>
      {products.map(product => (
        <div key={product.id} className="mb-3">
          <p className="font-semibold">{product.name}</p>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <img src={product.imageUrl} alt={`Product image for ${product.name}`} className="w-full h-auto rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Spinner } from '@chakra-ui/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface BusinessSpecProps {
  businessId: number;
}

const CreateBusinessSpecification: React.FC<BusinessSpecProps> = ({ businessId }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://api.example.com/businesses/${businessId}/products`);
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [businessId]);

  if (loading) return <Spinner className="m-auto" />;
  if (error) return <div role="alert" aria-live="polite">{error}</div>;

  return (
    <div className={clsx('bg-white p-6 rounded-lg shadow-md', 'max-w-screen-sm mx-auto')}>
      <h2 className="text-xl font-bold mb-4">Business Specification</h2>
      {products.map(product => (
        <div key={product.id} className="mb-3">
          <p className="font-semibold">{product.name}</p>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <img src={product.imageUrl} alt={`Product image for ${product.name}`} className="w-full h-auto rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default CreateBusinessSpecification;