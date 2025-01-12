import React, { useState } from "react";
export default function Sayhello() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center p-4 text-black">
      <div className="w-full max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-2">Say hello</h1>
          <p className="text-gray-600">
            Lorem ipsum is simply dummy text of the printing .
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Get in touch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
