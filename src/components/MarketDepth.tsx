export default function MarketDepth() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Market Depth</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Market Statistics</h3>
              {/* Add market statistics here */}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
              {/* Add transaction list here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}