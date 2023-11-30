import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getProducts } from './redux/ProductSlice';

function App() {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className="container">
          {loading ? 
          <h1>Chargement des donnees </h1>
          : <h1>Nombre de produits {products.length}</h1>
      }
    </div>
  );
}

export default App;
