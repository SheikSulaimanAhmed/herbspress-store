export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-green-600">Welcome to HerbsPresss</h1>
      <p className="mt-4 text-gray-700">Fresh and organic juices delivered to your doorstep.</p>
      <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Shop Now
      </button>
    </div>
  );
}
