import { Link } from 'react-router-dom';

const Banner = () => {
  
  const bannerImg = 'https://i.postimg.cc/Wzg82ZjV/doctor-Tim.jpg';
  const doctorSample = 'https://i.postimg.cc/Sst3XCwz/banner-img-1.png'; // ভিন্ন ইমেজ URL

  return (
    <div className="bg-gray-50 shadow-amber-50 flex w-full py-10 items-center justify-center">
      <div className="mx-auto  px-10">
        {/* text part */}
        <div className="mb-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Dependable Care, Backed by Trusted Professionals.
          </h1>
          <p className="text-gray-500 mb-8">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a routine
            checkup or urgent consultation, book appointments in minutes and
            receive quality care you can trust.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Link
              to="/doctors"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium"
            >
              Search Now
            </Link>
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="search"
                placeholder="Search"
                className="bg-gray-100 outline-none ml-2"
              />
            </div>
          </div>
        </div>

        {/* img part*/}
        <div className="flex justify-center gap-4 px-4">
          <div className="w-1/2">
            <img
              src={bannerImg}
              alt="Medical professionals"
              className="rounded-lg shadow-xl border-2 border-white w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <img
              src={doctorSample}
              alt="Doctor sample"
              className="rounded-lg shadow-xl border-2 border-white w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;