import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface RequirementsForm {
  businessName: string;
  contactEmail: string;
  productCategories: string[];
  targetAudience: string;
  paymentMethods: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RequirementsForm>();
  const router = useRouter();

  const onSubmit = (data: RequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Gathered requirements:', data);
      setLoading(false);
      router.push('/confirmation');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
      <div>
        <label htmlFor="businessName" className="block mb-2">Business Name</label>
        <input
          type="text"
          id="businessName"
          {...register('businessName', { required: true })}
          className={`w-full p-3 border rounded ${errors.businessName ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="contactEmail" className="block mb-2">Contact Email</label>
        <input
          type="email"
          id="contactEmail"
          {...register('contactEmail', { required: true })}
          className={`w-full p-3 border rounded ${errors.contactEmail ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="productCategories" className="block mb-2">Product Categories</label>
        <input
          type="text"
          id="productCategories"
          {...register('productCategories', { required: true })}
          placeholder="e.g. Electronics, Clothing, etc."
          className={`w-full p-3 border rounded ${errors.productCategories ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="targetAudience" className="block mb-2">Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: true })}
          placeholder="e.g. Teenagers, Adults, etc."
          className={`w-full p-3 border rounded ${errors.targetAudience ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="paymentMethods" className="block mb-2">Payment Methods</label>
        <input
          type="text"
          id="paymentMethods"
          {...register('paymentMethods', { required: true })}
          placeholder="e.g. Credit Card, PayPal, etc."
          className={`w-full p-3 border rounded ${errors.paymentMethods ? 'border-red-500' : ''}`}
        />
      </div>

      <button type="submit" disabled={loading} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface RequirementsForm {
  businessName: string;
  contactEmail: string;
  productCategories: string[];
  targetAudience: string;
  paymentMethods: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RequirementsForm>();
  const router = useRouter();

  const onSubmit = (data: RequirementsForm) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Gathered requirements:', data);
      setLoading(false);
      router.push('/confirmation');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
      <div>
        <label htmlFor="businessName" className="block mb-2">Business Name</label>
        <input
          type="text"
          id="businessName"
          {...register('businessName', { required: true })}
          className={`w-full p-3 border rounded ${errors.businessName ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="contactEmail" className="block mb-2">Contact Email</label>
        <input
          type="email"
          id="contactEmail"
          {...register('contactEmail', { required: true })}
          className={`w-full p-3 border rounded ${errors.contactEmail ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="productCategories" className="block mb-2">Product Categories</label>
        <input
          type="text"
          id="productCategories"
          {...register('productCategories', { required: true })}
          placeholder="e.g. Electronics, Clothing, etc."
          className={`w-full p-3 border rounded ${errors.productCategories ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="targetAudience" className="block mb-2">Target Audience</label>
        <input
          type="text"
          id="targetAudience"
          {...register('targetAudience', { required: true })}
          placeholder="e.g. Teenagers, Adults, etc."
          className={`w-full p-3 border rounded ${errors.targetAudience ? 'border-red-500' : ''}`}
        />
      </div>

      <div>
        <label htmlFor="paymentMethods" className="block mb-2">Payment Methods</label>
        <input
          type="text"
          id="paymentMethods"
          {...register('paymentMethods', { required: true })}
          placeholder="e.g. Credit Card, PayPal, etc."
          className={`w-full p-3 border rounded ${errors.paymentMethods ? 'border-red-500' : ''}`}
        />
      </div>

      <button type="submit" disabled={loading} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;