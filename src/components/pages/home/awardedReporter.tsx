"use client";
import { awardedReporters } from "@/utils/constant";
import Link from "next/link";

const AwardedReporters = () => {
  const getFirstLetterInNames = (name: string) => {
    const _name = name.split(" ");
    return _name.length > 1 ? `${_name[0][0]}${_name[1][0]}` : `${_name[0]}`;
  };

  const reporters = awardedReporters.filter((item, i) => i < 12);
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Awarded Reporters
          </h2>
          <p className="text-gray-600 mt-4">
            Celebrating excellence in reporting and storytelling. Here are the
            top reporters of the week!
          </p>
        </div>

        {/* Reporters List */}
        <div className="grid md:grid-cols-6 gap-8">
          {reporters.map((reporter) => (
            <div
              key={reporter.id}
              className=" rounded overflow-hidden border border-gray-200 hover:border-gray-300 cursor-pointer transition-all group py-4 px-5"
            >
              <div className=" rounded-[34px] bg-gray-300 text-green-50 font-bold text-xl mx-auto  mt-3 size-20 flex items-center justify-center">
                {getFirstLetterInNames(reporter.name)}
              </div>
              <p className="text-gray-800 text-center group-hover:underline font-medium text-base truncate py-0.5">
                {reporter.name}
              </p>
              <p className="text-gray-500 text-xs text-center mt-0">
                {reporter.id} awaresome reports
              </p>
            </div>
          ))}
        </div>

        <Link
          href={""}
          className="my-10 bg-green-500 text-green-50 px-5 py-3 rounded-md block w-fit mx-auto"
        >
          Explore More Reporters
        </Link>
      </div>
    </section>
  );
};

export default AwardedReporters;

{
  /* <Image
  src={reporter.profileImage}
  alt={reporter.name}
  className="w-16 h-16 rounded-full object-cover"
  width={64}
  height={64}
/> */
}
