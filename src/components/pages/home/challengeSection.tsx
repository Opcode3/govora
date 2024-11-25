"use client";
import Image from "next/image";
import Link from "next/link";

const ChallengeSection = () => {
  return (
    <section className="bg-gray-700 py-16 my-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-50">
            Engage and Win Daily!
          </h2>
          <p className="text-green-50 mt-4 text-lg">
            Take on exciting challenges, test your knowledge, and share your
            insights for a chance to win weekly rewards!
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* #KnowNigeriaGetFed Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src="/news/knowNaijaGetFed.webp" // Replace with actual image path
              alt="#KnowNigeriaGetFed"
              className="w-full h-96 object-cover hover:opacity-90 transition-opacity"
              width={500}
              height={300}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                #KnowNigeriaGetFed
              </h3>
              <p className="text-gray-600 mt-4">
                Test your knowledge about Nigeria&apos;s history, culture, and
                governance. The more you know, the closer you are to winning
                exciting rewards!
              </p>
              <Link
                href="/challenge/know-nigeria"
                className="inline-block mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Join the Challenge
              </Link>
            </div>
          </div>

          {/* Reporter Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src="/news/week_report.webp" // Replace with actual image path
              alt="Reporter of the Week"
              className="w-full h-96 object-cover hover:opacity-90 transition-opacity"
              width={500}
              height={300}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Reporter of the Week
              </h3>
              <p className="text-gray-600 mt-4">
                Share your voice and report the happenings around you. The most
                engaging report each week wins!
              </p>
              <Link
                href="/challenge/reporter"
                className="inline-block mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
