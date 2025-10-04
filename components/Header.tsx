export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">FarmChain SPV</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">How it Works</a>
          <a href="#" className="hover:text-blue-600">Benefits</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>
    </header>
  );
}