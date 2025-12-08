import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  id: string;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const toast = useToast();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    }
    setLoading(false);
  };

  const onSubmit = handleSubmit(async (data: FormData) => {
    setLoading(true);
    try {
      await axios.post<Requirement>('https://api.example.com/requirements', data);
      toast({
        title: 'Success',
        description: 'Requirement added successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      reset();
      fetchRequirements(); // Refresh the requirements list after adding a new one
    } catch (err) {
      setError('Failed to add requirement.');
    }
    setLoading(false);
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={onSubmit} aria-label="Requirement Form" role="form">
        <input
          type="text"
          placeholder="Enter requirement name"
          {...register('requirementName')}
          required
          aria-required="true"
          className="block w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Enter requirement description"
          {...register('requirementDescription')}
          required
          aria-required="true"
          className="block w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      {error && (
        <div role="alert" aria-live="assertive" className="mt-4 bg-red-100 border-l-4 border-red-500 p-4 text-red-700">
          <p>{error}</p>
        </div>
      )}

      <ul className="mt-6 list-disc pl-5 space-y-2">
        {requirements.map((requirement) => (
          <li key={requirement.id} aria-label={`Requirement ${requirement.name}`}>
            <span className="text-gray-700">{requirement.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  id: string;
  name: string;
  description: string;
}

interface FormData {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const toast = useToast();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    }
    setLoading(false);
  };

  const onSubmit = handleSubmit(async (data: FormData) => {
    setLoading(true);
    try {
      await axios.post<Requirement>('https://api.example.com/requirements', data);
      toast({
        title: 'Success',
        description: 'Requirement added successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      reset();
      fetchRequirements(); // Refresh the requirements list after adding a new one
    } catch (err) {
      setError('Failed to add requirement.');
    }
    setLoading(false);
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      <form onSubmit={onSubmit} aria-label="Requirement Form" role="form">
        <input
          type="text"
          placeholder="Enter requirement name"
          {...register('requirementName')}
          required
          aria-required="true"
          className="block w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Enter requirement description"
          {...register('requirementDescription')}
          required
          aria-required="true"
          className="block w-full px-4 py-2 mb-3 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      {error && (
        <div role="alert" aria-live="assertive" className="mt-4 bg-red-100 border-l-4 border-red-500 p-4 text-red-700">
          <p>{error}</p>
        </div>
      )}

      <ul className="mt-6 list-disc pl-5 space-y-2">
        {requirements.map((requirement) => (
          <li key={requirement.id} aria-label={`Requirement ${requirement.name}`}>
            <span className="text-gray-700">{requirement.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;