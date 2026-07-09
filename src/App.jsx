import { useState } from 'react'

function App() {
  // We will eventually move this to a real state management solution or database
  const [jobs, setJobs] = useState([
    { id: 1, company: 'Google', role: 'Frontend Engineer', status: 'Applied', date: '2026-07-01' },
    { id: 2, company: 'Amazon', role: 'React Developer', status: 'Interviewing', date: '2026-06-28' },
  ])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">🚀 AppliTrack</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            + New Application
          </button>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-t-4 border-t-blue-500">
            <h2 className="text-sm font-medium text-gray-500 uppercase">Total Applied</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">{jobs.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-t-4 border-t-yellow-500">
            <h2 className="text-sm font-medium text-gray-500 uppercase">Interviewing</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-t-4 border-t-green-500">
            <h2 className="text-sm font-medium text-gray-500 uppercase">Offers</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
          </div>
        </div>

        {/* Applications Table Area */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Recent Applications</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-sm">
              (This is where our interactive data table will go!)
            </p>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App