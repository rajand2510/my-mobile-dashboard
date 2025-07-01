import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Dashboard = ({ isLoggedIn }) => {
  const leadsData = [
    { type: 'MCA', contacted: 0, notContacted: 4993 },
    { type: 'GST', contacted: 0, notContacted: 32798 },
    { type: 'IEC', contacted: 0, notContacted: 0 },
    { type: 'NGO', contacted: 0, notContacted: 1278 },
  ];

  return (

    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Tailwind CSS and Material Design Iconic Font CDNs */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />

      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow container-fluid px-4 md:px-0 py-4">
          <div className="row mt-4">
            <div className="col-12 col-lg-6">
              <h1 className="text-3xl font-bold mb-0 uppercase">Dashboard</h1>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12">
              <p className="mb-1">
                <small className="text-gray-600">
                  Below leads are showing for last 7 days
                </small>
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 mt-2">
                  <thead className="bg-blue-200">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">
                        Type
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 font-semibold border-r border-gray-300">
                        Contacted
                      </th>
                      <th className="px-4 py-2 text-left text-gray-800 font-semibold">
                        Not Contacted
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsData.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-4 py-2 border-r bg-blue-200 border-gray-300 text-gray-700">
                          {row.type}
                        </td>
                        <td className="px-4 py-2 border-r bg-blue-200 border-gray-300 text-gray-700">
                          {row.contacted}
                        </td>
                        <td className="px-4 py-2 bg-blue-200 text-gray-700">{row.notContacted}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
