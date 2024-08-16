const Pricing = () => {  
  return (  
    <div className="max-w-4xl mx-auto p-8 pt-9 rounded-lg border border-slate-700 shadow-lg bg-gray-800">  
      <section className="scmargin"><h2 className="text-2xl font-bold mb-1 text-sky-300">API Pricing</h2></section>
      <p className="text-slate-300 mb-1">Our API pricing is based on the model used and the number of tokens processed. Here&apos;s a breakdown of the costs:</p>  

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border border-slate-700 border-collapse">  
          <thead>  
            <tr className="bg-indigo-500">  
              <th className="px-4 py-4 border-b border-slate-700 text-left text-sm text-white">API</th>  
              <th className="px-4 py-4 border-b border-slate-700 text-left text-sm text-white">MODEL</th>  
              <th className="px-4 py-4 border-b border-slate-700 text-left text-sm text-white">PRICE PER 1K TOKENS</th>  
            </tr>  
          </thead>  
          <tbody>  
            <tr>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">OpenAI</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">GPT-3.5</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">$0.002</td>  
            </tr>  
            <tr>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">OpenAI</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">GPT-4</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">$0.03</td>  
            </tr>  
            <tr>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">Together AI</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">Llama-2-70b</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">$0.0008</td>  
            </tr>  
            <tr>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">Together AI</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">Llama-2-13b</td>  
              <td className="px-4 py-4 border-b border-slate-700 text-slate-300">$0.0006</td>  
            </tr>  
          </tbody>  
        </table>  
      </div>  

      <h3 className="text-xl font-semibold mt-7 text-sky-300">Token Estimation</h3>  
      <p className="text-slate-300">On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>  

      <h3 className="text-xl font-semibold mt-7 text-sky-300">Billing</h3>  
      <p className="text-slate-300">You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>  
    </div>  
  );  
};  

export default Pricing;