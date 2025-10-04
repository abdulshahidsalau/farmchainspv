export default function BenefitsGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">For Investors</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Secure investments</li>
              <li>• Transparent processes</li>
              <li>• Easy portfolio management</li>
            </ul>
          </div>
          {/* Add more benefit categories */}
        </div>
      </div>
    </section>
  );
}