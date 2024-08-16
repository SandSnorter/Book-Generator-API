const CodeExamples = () => {  
    return (  
      <div className="max-w-4xl mx-auto mb-9 p-8 pt-9 rounded-lg border border-slate-700 shadow-lg bg-gray-800">  
        <section className="scmargin"><h2 className="text-2xl font-bold mb-1 text-sky-300">Code Examples</h2></section>

        <h3 className="text-xl font-semibold mb-1 mt-7 text-sky-300">Python</h3>  
        <div className="border border-slate-700 rounded-lg p-4 bg-gray-900 overflow-x-auto">  
          <pre className="text-slate-300 text-sm font-mono">  
            {`import requests  

API_KEY = "your_api_key_here"  
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"  

headers = {  
    "Content-Type": "application/json",  
    "X-API-Key": API_KEY  
}  

data = {  
    "api": "openai",  
    "model": "gpt-3.5-turbo",  
    "topic": "The Future of Artificial Intelligence",  
    "language": "English",  
    "word_count": 5000  
}  

response = requests.post(API_ENDPOINT, json=data, headers=headers)  

if response.status_code == 200:  
    result = response.json()  
    print(f"Book generation started. Job ID: {result['job_id']}")  
else:  
    print(f"Error: {response.status_code} - {response.text}")`}  
          </pre>  
        </div>  

        <h3 className="text-xl font-semibold mb-1 mt-7 text-sky-300">JavaScript (Node.js)</h3>  
        <div className="border border-slate-700 rounded-lg p-4 bg-gray-900 overflow-x-auto">  
          <pre className="text-slate-300 text-sm font-mono">  
            {`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}  
          </pre>  
        </div>  

      </div>  
    );  
};  
  
export default CodeExamples;