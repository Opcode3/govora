export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="text-center text-white">
        <div className="text-[200px] font-bold mb-4">
          <span className="animate-pulse">Govora</span>
        </div>
        <div className="border-t-4 border-green-500 border-solid w-16 h-16 rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}
