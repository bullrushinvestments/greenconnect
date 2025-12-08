import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description: string;
  features: Array<string>;
  pricingModel: PricingModel;
}

enum PricingModel {
  PAY_PER_USE = "PAY_PER_USE",
  SUBSCRIPTION = "SUBSCRIPTION"
}

interface CreateBusinessSpecFormProps {
  onSubmit: (specification: BusinessSpec) => void;
}

const CreateBusinessSpecForm: React.FC<CreateBusinessSpecFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();

  const submitHandler: SubmitHandler<BusinessSpec> = (data) => {
    setLoading(true);
    axios.post('/api/business-spec', data)
      .then(response => {
        onSubmit(response.data);
        reset();
      })
      .catch(err => {
        setError('An error occurred while creating the business specification.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(submitHandler)}>
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter business name"
          {...register('name', { required: 'Name is required' })}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.name && "border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          placeholder="Enter business description"
          {...register('description', { required: 'Description is required' })}
          rows={3}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.description && "border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="features" className="block text-gray-700 font-bold mb-2">Features</label>
        <input
          type="text"
          id="features"
          placeholder="Enter features (comma-separated)"
          {...register('features', { required: 'Features are required' })}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.features && "border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pricingModel" className="block text-gray-700 font-bold mb-2">Pricing Model</label>
        <select
          id="pricingModel"
          {...register('pricingModel', { required: 'Pricing model is required' })}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.pricingModel && "border-red-500"
          )}
        >
          <option value="">Select pricing model</option>
          <option value="PAY_PER_USE">Pay Per Use</option>
          <option value="SUBSCRIPTION">Subscription</option>
        </select>
      </div>
      <button type="submit" className={clsx(
        "w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600",
        loading && "opacity-75 cursor-not-allowed"
      )} disabled={loading}>
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpec {
  name: string;
  description: string;
  features: Array<string>;
  pricingModel: PricingModel;
}

enum PricingModel {
  PAY_PER_USE = "PAY_PER_USE",
  SUBSCRIPTION = "SUBSCRIPTION"
}

interface CreateBusinessSpecFormProps {
  onSubmit: (specification: BusinessSpec) => void;
}

const CreateBusinessSpecForm: React.FC<CreateBusinessSpecFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>();

  const submitHandler: SubmitHandler<BusinessSpec> = (data) => {
    setLoading(true);
    axios.post('/api/business-spec', data)
      .then(response => {
        onSubmit(response.data);
        reset();
      })
      .catch(err => {
        setError('An error occurred while creating the business specification.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(submitHandler)}>
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Business Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter business name"
          {...register('name', { required: 'Name is required' })}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.name && "border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          placeholder="Enter business description"
          {...register('description', { required: 'Description is required' })}
          rows={3}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.description && "border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="features" className="block text-gray-700 font-bold mb-2">Features</label>
        <input
          type="text"
          id="features"
          placeholder="Enter features (comma-separated)"
          {...register('features', { required: 'Features are required' })}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.features && "border-red-500"
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pricingModel" className="block text-gray-700 font-bold mb-2">Pricing Model</label>
        <select
          id="pricingModel"
          {...register('pricingModel', { required: 'Pricing model is required' })}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
            errors.pricingModel && "border-red-500"
          )}
        >
          <option value="">Select pricing model</option>
          <option value="PAY_PER_USE">Pay Per Use</option>
          <option value="SUBSCRIPTION">Subscription</option>
        </select>
      </div>
      <button type="submit" className={clsx(
        "w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600",
        loading && "opacity-75 cursor-not-allowed"
      )} disabled={loading}>
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecForm;