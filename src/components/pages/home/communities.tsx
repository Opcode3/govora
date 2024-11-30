import Link from "next/link";

const insights = [
  {
    id: 1,
    title: "Yankari Game Reserve (Bauchi State)",
    description:
      "Yankari Game Reserve, Nigeria’s largest wildlife park, has seen increased investment in recent years to improve facilities and accessibility. Known for its diverse wildlife, including elephants, lions, and crocodiles, it has been gradually receiving attention as a prime eco-tourism destination. Recent improvements in park facilities and conservation programs have attracted more local and international visitors.",
    image: "/images/communities/6.jpg",
  },
  {
    id: 2,
    title: "Ogbunike Caves (Anambra State)",
    description:
      "The Ogbunike Caves in Anambra State have long been an important cultural and spiritual site for the local people. Recently, the caves have been declared a UNESCO World Heritage Site, which has significantly raised their profile. The caves are known for their historical significance, as they were used by the locals for worship and traditional rituals.",
    image: "/images/communities/5.png",
  },
  {
    id: 3,
    title: "Olumo Rock (Abeokuta, Ogun State)",
    description:
      "Olumo Rock, a popular historical and cultural landmark, has recently undergone significant developments to enhance the visitor experience. The rock, which has historical significance as a fortress used by the Egba people in the 19th century, is now equipped with a modern cable car that allows visitors to ascend easily to the summit. T",
    image: "/images/communities/4.jpg",
  },
  {
    id: 4,
    title: "Lekki Conservation Centre (Lagos)",
    description:
      "Lekki Conservation Centre, located in Lagos, is one of Nigeria's largest and most preserved urban wetlands. It has become a popular eco-tourism attraction in recent years, particularly for nature lovers and families. Recent developments have made it more appealing with upgraded walking trails, elevated walkways, and the introduction of educational programs on wildlife conservation.",
    image: "/images/communities/3.jpg",
  },
  {
    id: 5,
    title: "National Museum of Nigerian Cinema (Jos, Plateau State)",
    description:
      "This is one of the newest and most unique attractions in Nigeria. Located in Jos, Plateau State, the National Museum of Nigerian Cinema is dedicated to the country's film history, particularly the rise of Nollywood, the world’s second-largest film industry. The museum features exhibits showcasing the evolution of Nigerian cinema, iconic films, and artifacts from Nollywood’s golden age.",
    image: "/images/communities/2.jpg",
  },
  {
    id: 6,
    title: "The Eko Atlantic City (Lagos)",
    description:
      "Eko Atlantic City, a man-made development on the coast of Lagos, is one of the most ambitious real estate and infrastructure projects in Africa. Situated along Victoria Island, this development aims to create a modern urban environment complete with luxury hotels, shopping malls, residential units, and office spaces. It has been designed as a high-tech, eco-friendly city and is attracting investors and tourists alike.",
    image: "/images/communities/1.webp",
  },
];

const CommunitiesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex mb-10 justify-between items-center">
          <div className="text-left flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800">
              Explore Nigeria&apos;s Communities,
            </h2>
            <p className="text-gray-600 mt-2">
              Discover the Rich Cultures, Abundant Resources, and Lucrative
              Investment Potential of Nigeria.
            </p>
          </div>
          <Link
            href={""}
            className="bg-green-500 text-green-50 rounded-sm py-2 px-4"
          >
            Explore More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {insight.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mt-2">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitiesSection;
