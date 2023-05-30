import React from 'react'
import ReactDOM from 'react-dom/client'
import data from "../data"
import Travel from "./Travel"
import Header from "./Header"

function App() {
    const dataArray = data.map(item => {
        return <Travel 
                key={item.id}
                item={item}
                />
    })

    return (
    <div className="content">
        <Header />
        {dataArray}    
    </div>
    );
    }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



