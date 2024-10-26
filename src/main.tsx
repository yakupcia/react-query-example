
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

// QueryClient nesnesini oluşturuyoruz
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient} >
    <App />
  </QueryClientProvider>,
)


// use query hookunu kullanarak veri çekme işlemlerini yapabiliriz

// use mutation hookunu kullanarak veri güncelleme işlemlerini yapabiliriz