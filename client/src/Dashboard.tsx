const Dashboard = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-red-500">Pokemon Team Builder</h1>
      <input
        className="border border-gray-300 p-2 rounded"
        placeholder="Enter Pokemon name..."
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Add to Team
      </button>
    </div>
  );
};

export default Dashboard;