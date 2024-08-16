const Endpoints = () => {  
    return (  
      <div className="max-w-4xl mx-auto mb-9 p-8 pt-9 rounded-lg border border-slate-700 shadow-lg bg-gray-800">  
        <section className="scmargin"><h2 className="text-2xl font-bold mb-1 text-sky-300">Endpoints</h2></section>

        <h3 className="text-xl font-semibold mt-7 text-sky-300">Generate Book</h3>  
        <button className="bg-cyan-400 text-white text-md font-bold py-1 px-2 rounded" style={{ cursor: 'text' }}>POST</button>
        <button className="bg-indigo-500 text-md text-white font-bold py-2 px-4 m-2 rounded" style={{ cursor: 'text' }}>/api/generate-book</button>

        <h3 className="text-xl font-semibold mt-7 mb-1 text-sky-300">Request body</h3>  
        <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg border border-slate-700 border-collapse">  
            <thead>  
                <tr className="bg-indigo-500">  
                <th className="px-4 py-4 border-b border-slate-700 text-left text-sm text-white">PARAMETER</th>  
                <th className="px-4 py-4 border-b border-slate-700 text-left text-sm text-white">TYPE</th>  
                <th className="px-4 py-4 border-b border-slate-700 text-left text-sm text-white">DESCRIPTION</th>  
                </tr>  
            </thead>  
            <tbody>  
                <tr>  
                <td className="px-4 py-4 font-bold border-b border-slate-700 text-cyan-500">api</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">string</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300"> The API provider to use. Options: &quot;openai&quot; or &quot;together&quot;</td>  
                </tr>  
                <tr>  
                <td className="px-4 py-4 border-b border-slate-700 font-bold text-cyan-500">model</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">string</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">The specific model to use (e.g., &quot;gpt-3.5-turbo&quot;, &quot;gpt-4&quot;, &quot;llama-2-70b&quot;)</td>  
                </tr>  
                <tr>  
                <td className="px-4 py-4 border-b border-slate-700 font-bold text-cyan-500">topic</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">string</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">The main topic or theme of the book</td>  
                </tr>  
                <tr>  
                <td className="px-4 py-4 border-b border-slate-700 font-bold text-cyan-500">language</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">string</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">The language in which the book should be generated</td>  
                </tr>  
                <tr>  
                <td className="px-4 py-4 border-b border-slate-700 font-bold text-cyan-500">word_count</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">integer</td>  
                <td className="px-4 py-4 border-b border-slate-700 text-slate-300">The approximate number of words for the generated book</td>  
                </tr> 
            </tbody>  
            </table>  
        </div>  
        <h3 className="text-xl font-semibold mt-7 mb-1 text-sky-300">Response</h3> 
        <div className="border border-slate-700 rounded-lg p-4 bg-gray-900 overflow-x-auto">  
          <pre className="text-slate-300 text-sm font-mono">  
            {`{
    "message": "Book generation started",
    "status": "processing",
    "job_id": "unique-job-identifier"
}`}  
          </pre>  
        </div>  
      </div>  
    );  
};  
  
export default Endpoints;