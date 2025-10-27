import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-gray-300 container mx-auto py-16 px-4 text-center border rounded-3xl">
        <div className="text-center">
          <h1 className="text-5xl mb-6 text-cyan-800 font-bold underline">
            Inventory Management
          </h1>
          <p className="text-medium max-w-2xl mx-auto  mb-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, molestiae! Laudantium corrupti recusandae culpa
            repellendus dolorum mollitia adipisci dicta minus soluta porro, hic
            eligendi a deserunt repudiandae iusto? Culpa, sequi? Earum, quas
            inventore qui autem at distinctio esse ipsam sequi dignissimos
            aliquid, iure corporis quod adipisci praesentium harum est
            necessitatibus.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/sign-in"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold border hover:bg-white hover:text-purple-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
