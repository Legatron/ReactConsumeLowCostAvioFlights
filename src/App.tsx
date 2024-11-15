import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api'
import ResponseFlightsDisplay from './ResponseFlightsDisplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ResponseData {
  data: string;
}

function App() {
  const [responseData, setResponseData] = useState<ResponseData[]>([]);
  const hasRun = useRef(false)

  const fetchWeatherData = async () => {
    try {
      const response = await api.get('/api/FlightSearch');
      setResponseData(prevState => ({ ...prevState, responseData: response.data }));
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while fetching data');
    }
  };

 const init = useCallback(async () => {
    await fetchWeatherData();
  }, []);
  
  useEffect(() => {
    if (!hasRun.current) {
      init();
      hasRun.current = true;
    }
  }, [init]);

  return (
    <>
    <div>
      <ToastContainer />
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
      <h2>Display the first search result that has flight information from the LowCostAvioFlights API</h2>
      <pre className="json-pretty">
      <ResponseFlightsDisplay responseData={responseData} />
      </pre>
    </div>

    </>
  )
}

export default App
