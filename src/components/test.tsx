import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  name: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim() || !testDescription.trim()) return;

    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', { name: testName, description: testDescription });
      router.push('/');
    } catch (err: any) {
      setError('Failed to create the test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">Create a New Test</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} aria-label="Test creation form">
        <div className="mb-4">
          <label htmlFor="testName" className="block mb-1">Test Name</label>
          <input
            type="text"
            id="testName"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            required
            aria-label="Enter the test name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="testDescription" className="block mb-1">Test Description</label>
          <textarea
            id="testDescription"
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
            required
            aria-label="Enter the test description"
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className={`w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  name: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim() || !testDescription.trim()) return;

    try {
      setLoading(true);
      setError(null);
      await axios.post('/api/tests', { name: testName, description: testDescription });
      router.push('/');
    } catch (err: any) {
      setError('Failed to create the test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">Create a New Test</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} aria-label="Test creation form">
        <div className="mb-4">
          <label htmlFor="testName" className="block mb-1">Test Name</label>
          <input
            type="text"
            id="testName"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            required
            aria-label="Enter the test name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="testDescription" className="block mb-1">Test Description</label>
          <textarea
            id="testDescription"
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
            required
            aria-label="Enter the test description"
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className={`w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;