//src/components/community/services/marriage-registry.js

import Link from "next/link";

const MarriageRegistryCTA = () => {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg bg-white p-6 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="flex-shrink-0 mb-4">
        <svg
          className="w-12 h-12 text-blue-500 group-hover:text-blue-700 transition-colors duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 21.5a4 4 0 01-4-4V12a4 4 0 018 0v5.5a4 4 0 01-4 4zM12 12a4 4 0 00-4 4m4-4a4 4 0 004 4M12 6a2.5 2.5 0 015 0c0 2.5-5 5-5 5S7 8.5 7 6a2.5 2.5 0 015 0z"
          />
        </svg>
      </div>

      {/* Content */}
      <h4 className="text-base font-bold font-josefin text-gray-900 leading-tight">
        Schedule Your Marriage Registry
      </h4>
      <p className="mt-2 text-sm text-gray-600 font-merriweather line-clamp-2 leading-relaxed">
        Book an appointment for your marriage registry at a convenient time and
        location.
      </p>

      {/* Button */}
      <Link
        href="/community/online-services/marriage-registry"
        className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        Schedule an Appointment
      </Link>
    </div>
  );
};

export default MarriageRegistryCTA;
