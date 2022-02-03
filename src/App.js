import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader'
import React, { useState } from 'react';



function App() {
  const [result, setResult] = useState({
    result : "No result"
  });
  const [showQr,setShowQr] = useState(false)
   const handleScan = data => {
    if (data) {
      setResult({
        result: data
      })
    }
  }
  const handleError = err => {
    console.error(err)
  }
  return (
    <div>
        <center>
          {showQr &&
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '50%' ,height :'50%'}}
            />
          }
        </center>
        <p>{result.result}</p>
        <button onClick={() => setShowQr(true)}>Scan qr</button>
    </div>
  );
}

export default App;
