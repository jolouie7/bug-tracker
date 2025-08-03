"use client";

import { useEffect, useState } from 'react';
import { api, Bug } from '@/lib/api/v1';

export function BugsList() {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await api.bugs.getAll();
        setBugs(response.bugs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch bugs');
      } finally {
        setLoading(false);
      }
    };

    fetchBugs();
  }, []);

  if (loading) return <div>Loading bugs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Bugs</h2>
      {bugs.length === 0 ? (
        <p>No bugs found</p>
      ) : (
        <ul className="space-y-2">
          {bugs.map((bug) => (
            <li key={bug.id} className="p-4 border rounded">
              <h3 className="font-semibold">{bug.title}</h3>
              <p className="text-sm text-gray-600">{bug.description}</p>
              <div className="flex gap-2 mt-2">
                <span className={`px-2 py-1 text-xs rounded ${
                  bug.priority === 'high' ? 'bg-red-100 text-red-800' :
                  bug.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {bug.priority}
                </span>
                <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                  {bug.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}