export default function Newsletter() {
  return (
    // sections/NewsletterSection.tsx
    <section className="mb-20 bg-white max-w-[1000px] mx-auto text-gray-300 border rounded-3xl py-12 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-7xl font-bold text-gray-700 mb-4">
          Join Our Newsletter
        </h2>
        <p className="mb-6 text-lg text-gray-700  max-w-[700px] mx-auto text-center">
          Stay updated with the latest news on governance and citizen engagement
          in Nigeria. Subscribe now!
        </p>
        <form className="flex justify-center items-center w-fit mx-auto overflow-hidden rounded-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className=" bg-green-50 w-[400px] text-gray-600 border-none outline-none h-[60px] pl-6 text-lg"
            required
          />
          <button
            type="submit"
            className=" h-[60px] bg-green-500 text-2xl px-6 text-white"
          >
            Subscribe
          </button>
        </form>
        <p className=" text-gray-700  text-lg py-5 italic">
          We promise not to spam you!
        </p>
      </div>
    </section>
  );
}
