import Link from "next/link";
export default function NcdThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          🎉 Thank You for Applying!
        </h1>
        <p className="text-gray-700 mb-6">
          Your application for <strong>Indel Money NCD</strong> has been submitted successfully.  
          Our team will get in touch with you shortly.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
