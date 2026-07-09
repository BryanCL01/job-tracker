import { useState } from 'react'

function App() {
  // Main state for our list of jobs
  const [jobs, setJobs] = useState([
    { id: 1, company: 'Google', role: 'Frontend Engineer', status: 'Applied', date: '2026-07-01' },
    { id: 2, company: 'Amazon', role: 'React Developer', status: 'Interviewing', date: '2026-06-28' },
  ])

  // UI state to toggle the modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Form state to hold the new application data
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: ''
  })

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevents the page from refreshing
    
    const newJob = {
      id: Date.now(), // Generate a simple unique ID
      ...formData
    }

    setJobs([...jobs, newJob]) // Add the new job to our existing array
    setIsModalOpen(false) // Close the modal
    setFormData({ company: '', role: '', status: 'Applied', date: '' }) // Reset form
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">🚀 AppliTrack</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors cursor-pointer"
          >
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
          {/* We will make these dynamic later based on the actual statuses! */}
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
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Company</th>
                  <th className="p-4 font-medium">Role</th>
                  <th className="p-4 font-medium">Date Applied</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {jobs.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-gray-500">
                      No applications yet. Click "New Application" to get started!
                    </td>
                  </tr>
                ) : (
                  jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">{job.company}</td>
                      <td className="p-4 text-gray-600">{job.role}</td>
                      <td className="p-4 text-gray-600">{job.date}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                          ${job.status === 'Applied' ? 'bg-blue-100 text-blue-800' : ''}
                          ${job.status === 'Interviewing' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${job.status === 'Offer' ? 'bg-green-100 text-green-800' : ''}
                          ${job.status === 'Rejected' ? 'bg-red-100 text-red-800' : ''}
                        `}>
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* The Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Add New Job</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 font-bold text-xl cursor-pointer">
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Epic Games"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input 
                  type="text" 
                  name="role" 
                  value={formData.role} 
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Software Engineer or Video Game Developer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Offer">Offer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors cursor-pointer"
                >
                  Save Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App