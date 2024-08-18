import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Section from './components/Section'

function App() {
  return (
    <div className='relative w-full h-screen bg-slate-900 overflow-x-hidden'>
    <Header/>
    <Navbar/>
    <div className="p-8 space-y-8">
        <Section
          id="overview"
          title="Overview"
          description="The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples."
        />
        <Section
          id="authentication"
          title="Authentication"
          description="To use the API, you need to include your API key in the header of each request:"
        >
          <div className="bg-slate-900 p-4 rounded-md text-sm text-zinc-200 font-mono mt-4 mb-6">
            X-API-Key: YOUR_API_KEY
          </div>
          <p className="text-gray-300 mb-4">To generate an API key, use the button below:</p>
          <button className="transition ease-in-out delay-150 bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300">
            Generate API Key
          </button>
          <div className="bg-slate-900 p-4 rounded-md text-sm text-zinc-200 font-mono mt-4 mb-6 overflow-x-auto">
          Your API Key: Vmoitq8vzCxPbm7Es2selcCaHNaSWOI2yy8omn0e04w
          </div>
        </Section>
        <Section
          id="endpoints"
          title="Endpoints"
          description=""
        >
          <h3 className="sm:text-sm lg:text-xl font-bold mt-6 mb-1 text-indigo-300">Generate Book</h3>
          <div className="flex items-center space-x-4 mb-4">
            <button className="bg-cyan-400 text-black px-2 py-1 rounded-md text-md text-xs sm:text-xs md:text-sm lg:text-md font-semibold">POST</button>
            <span className="bg-indigo-500 text-zinc-100 px-3 py-3 rounded-md text-xs sm:text-xs md:text-sm lg:text-md font-bold">/api/generate-book</span>
          </div>
          <h6 className=" font-bold py-4 text-indigo-300">Request Body</h6>
          <div className='overflow-x-auto'>
          <table className="relative sm:text-sm md:text-base lg:text-base w-full text-left mb-4 border border-gray-800 rounded-md overflow-hidden">
  <thead>
    <tr className="bg-indigo-500 text-zinc-50 text-xs sm:text-xs md:text-sm lg:text-md">
      <th className="font-semibold p-4 first:rounded-tl-md last:rounded-tr-md">PARAMETER</th>
      <th className="font-semibold p-4 ">TYPE</th>
      <th className="font-semibold p-4">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-x-2 border-gray-400/40 text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-4 text-cyan-400 font-bold">api</td>
      <td className="p-4 text-white">string</td>
      <td className="p-4 text-white">The API provider to use. Options: "openai" or "together"</td>
    </tr>
    <tr className="border-x-2 border-[1px] border-gray-400/40 text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-2 text-cyan-400 font-bold">model</td>
      <td className="p-4 text-white">string</td>
      <td className="p-4 text-white">The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
    </tr>
    <tr className="border-[1px] border-x-2 border-gray-400/40 text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-2 text-cyan-400 font-bold">topic</td>
      <td className="p-4 text-white">string</td>
      <td className="p-4 text-white">The main topic or theme of the book</td>
    </tr>
    <tr className="border-[1px] border-x-2 border-gray-400/40 text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-2 text-cyan-400 font-bold">language</td>
      <td className="p-4 text-white">string</td>
      <td className="p-4 text-white">The language in which the book should be generated</td>
    </tr>
    <tr className="border-[1px] border-x-2 border-b-2 border-gray-400/40 first:rounded-bl-xl last:rounded-br-xl text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-2 text-cyan-400 font-bold">word_count</td>
      <td className="p-4 text-white">integer</td>
      <td className="p-4 text-white">The approximate number of words for the generated book</td>
    </tr>
  </tbody>
</table>
</div>
          <h4 className="font-bold py-2 text-indigo-300">Response</h4>
          <pre className="border-[1px] border-blue-100/10 p-4 rounded-lg text-zinc-300 text-sm overflow-x-auto">
{`{
    "message": "Book generation started",
    "status": "processing",
    "job_id": "unique-job-identifier"
}`}
          </pre>
        </Section>
        <Section
          id="tutorial"
          title="Tutorial"
          description=""
        >
          <h3 className="text-sm sm:text-sm md:text-md lg:text-xl font-bold mt-6 mb-1 text-indigo-300">Step 1: Obtain an API Key</h3>
          <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-md mb-4">Generate an API key using the button in the Authentication section above.</p>
          <h3 className="text-sm sm:text-sm md:text-md lg:text-xl font-bold mt-6 mb-1 text-indigo-300">Step 2: Make a Request</h3>
          <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-md mb-4">Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
          <h3 className="text-sm sm:text-sm md:text-md lg:text-xl font-bold mt-6 mb-1 text-indigo-300">Step 3: Handle the Response</h3>
          <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-md mb-4">The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p><h3 className="text-sm sm:text-sm md:text-md lg:text-xl font-bold mt-6 mb-1 text-indigo-300">Step 4: Retrieve the Generated Book</h3>
          <p className="text-gray-400 text-sm sm:text-sm md:text-base lg:text-md mb-4">Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
        </Section>
        <Section
          id="code-examples"
          title="Code Examples"
          description=""
        >
          <h4 className="font-bold mt-8 py-2 text-indigo-300 text-md sm:text-md md:text-lg lg:text-xl">Python</h4>
          <pre className="border-[1px] border-blue-100/10 p-4 rounded-lg text-zinc-300 text-xs sm:text-xs md:text-sm lg:text-md overflow-x-auto">
{`{
import requests

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
    print(f"Error: {response.status_code} - {response.text}")
}`}
          </pre>

          <h4 className="font-bold mt-8 py-2 text-indigo-300 text-md sm:text-md md:text-lg lg:text-xl">JavaScript (Node.js)</h4>
          <pre className="border-[1px] border-blue-100/10 p-4 rounded-lg text-zinc-300 text-xs sm:text-xs md:text-sm lg:text-md overflow-x-auto">
{`{
const axios = require('axios');

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
        console.log('Book generation started. Job ID:');
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
});
}`}
          </pre>
        </Section>
        <Section
          id="pricing"
          title="API Pricing"
          description=""
        >
      <p className="text-sm mb-4 text-gray-300"> Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>

          <table className="relative table-fixed sm:text-sm md:text-base lg:text-base w-full text-left mb-4 border border-gray-800 rounded-md overflow-hidden">
  <thead>
    <tr className="bg-indigo-500 text-zinc-50 text-xs sm:text-xs md:text-sm lg:text-md">
      <th className="font-semibold p-4 first:rounded-tl-md last:rounded-tr-md">API</th>
      <th className="font-semibold p-4 ">MODEL</th>
      <th className="font-semibold p-4">Price per 1K tokens</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-x-2 border-gray-400/40  text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-4 text-white ">OpenAI</td>
      <td className="p-4 text-white">GPT-3.5</td>
      <td className="p-4 text-white">$0.002</td>
    </tr>
    <tr className="border-x-2 border-[1px] border-gray-400/40  text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-4 text-white ">OpenAI</td>
      <td className="p-4 text-white">GPT-4</td>
      <td className="p-4 text-white">$0.03</td>
    </tr>
    <tr className="border-[1px] border-x-2 border-gray-400/40 text-xs sm:text-xs md:text-sm lg:text-md">
      <td className="p-4 text-white ">Together AI</td>
      <td className="p-4 text-white">Llama-2-70b</td>
      <td className="p-4 text-white">$0.0008</td>
    </tr>
    <tr className="border-[1px] border-x-2 border-b-2 border-gray-400/40 text-xs sm:text-xs md:text-sm lg:text-md first:rounded-bl-xl last:rounded-br-xl">
      <td className="p-4 text-white ">Together AI</td>
      <td className="p-4 text-white">Llama-2-13b</td>
      <td className="p-4 text-white">$0.0006</td>
    </tr>
  </tbody>
</table>

<h2 className="sm:text-md md:text-md lg:text-lg font-bold text-indigo-300 mt-8 mb-1">Token Estimation</h2>
      <p className="text-sm sm:text-sm md:text-base lg:text-md text-gray-300">On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>

      <h2 className="sm:text-md md:text-md lg:text-lg font-bold text-indigo-300 mt-8 mb-1">Billing</h2>
      <p className="text-sm sm:text-sm md:text-base lg:text-md text-gray-300">You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </Section>
        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

export default App

