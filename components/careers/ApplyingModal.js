import React from 'react';

const ApplyingModal = ({ id, title, onClose, onApplySuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (onApplySuccess) onApplySuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Box */}
      <div className="relative bg-white shadow-lg p-6 w-full max-w-md z-10">
        <h2 className="text-[22px] font-bold mb-4 text-left"> {title}</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 px-4 py-2"
          />
          <input
            type="number"
            placeholder="Phone Number, +971.."
            className="w-full border-b border-gray-300 px-4 py-2"
          />
          <div className="flex items-center border-b border-gray-300">
            <input
              type="text"
              placeholder="Portfolio link / CV"
              className="flex-1 px-4 py-2 border-none outline-none"
              readOnly
            />
            <label className="bg-gray-200 font-bold text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-300 transition">
              <span>Upload File</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
            </label>
          </div>
          <input
            placeholder="Message"
            className="w-full border-b border-gray-300 px-4 py-2 resize-none"
          />
          <div className='flex items-center gap-4'>
            <button
              type="submit"
              className="cursor-pointer mt-4 bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer mt-4 bg-gray-300 text-black px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyingModal;