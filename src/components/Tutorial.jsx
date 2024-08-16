const Tutorial = () => {  
    return (  
      <div className="max-w-4xl mx-auto mb-9 p-8 pt-9 rounded-lg border border-slate-700 shadow-lg bg-gray-800">  
        <section className="scmargin"><h2 className="text-2xl font-bold text-sky-300">Tutorial</h2></section>

        <h3 className="text-xl font-semibold mt-7 text-sky-300">Step 1: Obtain an API Key</h3>  
        <p className="text-slate-300">Generate an API key using the button in the Authentication section above.</p>  

        <h3 className="text-xl font-semibold mt-7 text-sky-300">Step 2: Make a Request</h3>  
        <p className="text-slate-300">Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p> 

        <h3 className="text-xl font-semibold mt-7 text-sky-300">Step 3: Handle the Response</h3>  
        <p className="text-slate-300">The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p> 

        <h3 className="text-xl font-semibold mt-7 text-sky-300">Step 4: Retrieve the Generated Book</h3>  
        <p className="text-slate-300">Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p> 
      </div>  
    );  
};  
  
export default Tutorial;