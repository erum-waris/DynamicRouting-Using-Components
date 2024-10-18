export default function Home() {
  return (
    <div className="text-center min-h-screen bg-blue-300  ">
      <div>
        <h1 className="bg-pink-500 text-2xl text-black md:text-4xl p-8 ">
          Assignment 2 Assigned By Sir Bilal Muhammad Khan & Sir Aneeq Khatri
        </h1>
        <h2 className="text-2xl text-black m-5 font-bold ">
          {" "}
          Dynamic Routing{" "}
        </h2>
        <p className="mt-6 text-gray-900 text-xl font-semibold">
          A Dynamic Segment can be created by wrapping a file or folder name in
          square brackets: [segmentName].Example Folder Name [country_name] etc.
        </p>
      </div>
    </div>
  );
}
