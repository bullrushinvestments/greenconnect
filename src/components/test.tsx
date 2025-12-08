import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST_MUTATION } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  title: string;
  description: string;
}

interface CreateTestInput {
  title: string;
  description?: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CreateTestInput>();
  
  const [createTest] = useMutation(CREATE_TEST_MUTATION);

  const onSubmit = async (data: CreateTestInput) => {
    try {
      setLoading(true);
      await createTest({ variables: data });
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-1">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Test Title"
            {...register('title', { required: true })}
            aria-label="test-title"
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-1">Description:</label>
          <textarea
            id="description"
            placeholder="Test Description"
            {...register('description')}
            aria-label="test-description"
            rows={5}
            className={`w-full px-3 py-2 border rounded`}
          />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600">
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST_MUTATION } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  title: string;
  description: string;
}

interface CreateTestInput {
  title: string;
  description?: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CreateTestInput>();
  
  const [createTest] = useMutation(CREATE_TEST_MUTATION);

  const onSubmit = async (data: CreateTestInput) => {
    try {
      setLoading(true);
      await createTest({ variables: data });
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create a New Test</h2>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-1">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Test Title"
            {...register('title', { required: true })}
            aria-label="test-title"
            className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-1">Description:</label>
          <textarea
            id="description"
            placeholder="Test Description"
            {...register('description')}
            aria-label="test-description"
            rows={5}
            className={`w-full px-3 py-2 border rounded`}
          />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600">
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;