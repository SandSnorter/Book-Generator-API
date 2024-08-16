import { useState } from 'react';  

const Authentication = () => {  
    const [apiKey, setApiKey] = useState('');  

    const generateApiKey = (length) => {  
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
        let result = '';  
        for (let i = 0; i < length; i++) {  
            result += characters.charAt(Math.floor(Math.random() * characters.length));  
        }  
        setApiKey(result);  
    };  

    return (  
        <div className="max-w-4xl mx-auto mb-9 p-8 pt-9 rounded-lg border border-slate-700 shadow-lg bg-gray-800">  
            <section className='scmargin'><h2 className="text-2xl font-bold mb-1 text-sky-300">Authentication</h2></section>
            <p className="text-slate-300">To use the API, you need to include your API key in the header of each request:</p>  

            <div className="border border-slate-700 rounded-lg p-4 mt-2 mb-2 bg-gray-900 overflow-x-auto">  
                <pre className="text-slate-300 text-md font-mono">  
                    {`X-API-Key: YOUR_API_KEY`}  
                </pre>  
            </div>  
            <p className="text-slate-300">To generate an API key, use the button below:</p>  

            <button  
                onClick={() => generateApiKey(43)} 
                className="bg-cyan-500 text-white font-bold py-3 px-5 mt-4 mb-2 rounded transition-all duration-300 hover:bg-sky-600 hover:-translate-y-1">  
                Generate API Key  
            </button>  

            <div className="border border-slate-700 rounded-lg p-4 mt-2 mb-2 bg-gray-900 overflow-x-auto">  
                {apiKey && (  
                    <pre className="text-slate-300 text-md font-mono">  
                        {`Your API Key: `}  
                        <strong className="font-bold">{apiKey}</strong>  
                    </pre>  
                )}  
            </div>  
        </div>  
    );  
};  

export default Authentication;