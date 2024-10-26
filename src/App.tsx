// en temelde react querydeki useQuery ve useMutation hooklarını kullanarak veri çekme ve güncelleme işlemlerini yapabiliriz.

import React from 'react';
import './App.css';
import { useMutation, useQuery } from 'react-query';

function App() {
  const { data, isLoading } = useQuery('city', async () => {
    const response = await fetch('http://localhost:2000/api/city');
    const jsonData = await response.json();
    // console.log(jsonData);
    return jsonData.data;
  });

  const mutation = useMutation(async (newData: object) => {
    const response = await fetch('http://localhost:2000/api/city/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    return response.json();
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>Data: {JSON.stringify(data)}</div>
      <button onClick={() => mutation.mutate({data: { name: 'istanbul', country_id: 1} })}>
        Veri Gönder
      </button>
    </>
  );
}

export default App;
