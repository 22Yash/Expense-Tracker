import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function NewExpenseForm() {
  const [formData, setFormData] = useState({
    subject: "",
    merchant: "",
    date: "",
    total: "",
    currency: "USD",
    reimbursable: false,
    category: "",
    description: "",
    employee: "",
    addToReport: false,
  });

  const [invoice, setInvoice] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInvoice(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Submitted:", formData);
  };

  return (
    <div className="h-screen w-full bg-[#1C1C1C] text-white flex gap-[30px]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#141414] ml-[-10px] ">
       <Sidebar/>
      </aside>

      {/* Main Form */}
      <div className="flex-1   p-8">
        <div className="bg-[#242424] h-[650px]  p-2 rounded-lg">
          <h2 className="text-xl font-bold">New Expense</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-6">
            {/* Left Inputs */}
            <div className="space-y-2 h-[400px] ">
              <div>
                <label className="block text-gray-300">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-300">Merchant*</label>
                <input
                  type="text"
                  name="merchant"
                  value={formData.merchant}
                  onChange={handleChange}
                  className="w-full bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-300">Date*</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                />
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex-1">
                  <label className="block text-gray-300">Total*</label>
                  <input
                    type="number"
                    name="total"
                    value={formData.total}
                    onChange={handleChange}
                    className="w-full bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                  />
                </div>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="reimbursable"
                  checked={formData.reimbursable}
                  onChange={handleChange}
                />
                <label className="text-gray-300">Reimbursable</label>
              </div>

              <div>
                <label className="block text-gray-300">Category*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                >
                  <option value="">Select</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="supplies">Office Supplies</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-300">Employee*</label>
                <input
                  type="text"
                  name="employee"
                  value={formData.employee}
                  onChange={handleChange}
                  className="w-full bg-[#1C1C1C] text-white p-2 rounded border border-gray-600"
                />
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  name="addToReport"
                  checked={formData.addToReport}
                  onChange={handleChange}
                />
                <label className="text-gray-300">Add to report</label>
              </div>
            </div>

            {/* Right Side - File Upload */}
            <div className="bg-[#1C1C1C] flex items-center justify-center rounded-lg border-2 border-dashed border-gray-500 p-6">
              {invoice ? (
                <img src={invoice} alt="Invoice" className="w-full h-full object-cover" />
              ) : (
                <label className="flex flex-col items-center justify-center cursor-pointer">
                  <span className="text-3xl">+</span>
                  <span className="text-sm">Upload an invoice</span>
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
              )}
            </div>
          </form>

          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            <button className="bg-teal-500 text-white px-4 py-2 rounded">Save Draft</button>
            <button onClick={handleSubmit} className="bg-gray-600 px-4 py-2 rounded">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
