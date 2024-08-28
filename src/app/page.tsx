import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Rave Tour</h1>
        <p className="text-lg mb-8">
          Rave Tour is a travel agency that specializes in creating unique and
          unforgettable experiences for travelers.
        </p>
        <Link href="/tours/best-of-italy" className="inline-block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </Link>
      </div>
    </main>
  );
}
