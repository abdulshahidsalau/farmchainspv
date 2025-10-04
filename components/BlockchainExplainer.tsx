export default function BlockchainExplainer() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blockchain Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Secure</h3>
            <p className="text-gray-600">Advanced encryption and immutable records</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Transparent</h3>
            <p className="text-gray-600">Full visibility of all transactions</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Efficient</h3>
            <p className="text-gray-600">Fast and automated processes</p>
          </div>
        </div>
      </div>
    </section>
  );
}