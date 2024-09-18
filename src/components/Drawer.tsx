import { FaPlayCircle } from "react-icons/fa";

function Drawer() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <div className="bg-gray-900 text-white w-64 p-6">
        <button className="text-sm mb-4 text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.707 17.707a1 1 0 0 1-1.414-1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L11.414 16a.8.8 0 0 1-.707.707zM3 11a1 1 0 0 1 0-2v-4a1 1 0 0 1 2-1h12a1 1 0 1 1 0 2v4a1 1 0 0 1-2 1H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-white">Blender 3D Fundamentals</h1>
        <h3 className="text-gray-400 uppercase text-sm mt-6 mb-2">
          Course Introduction
        </h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center text-gray-300">
            <span className="text-white">Introduction</span>
            <span className="text-xs text-green-400">Preview</span>
          </li>
          <li className="text-white hover:text-gray-300">Downloading Blender</li>
          <li className="text-white hover:text-gray-300">Settings and Preferences</li>
          <li className="text-white hover:text-gray-300">Blender Interface</li>
        </ul>
        <h3 className="text-gray-400 uppercase text-sm mt-6 mb-2">
          Basics of Blender 3D
        </h3>
        <ul className="space-y-2">
          <li className="text-white hover:text-gray-300">Mesh Modeling</li>
          <li className="text-white hover:text-gray-300">Mesh Editing Operations</li>
          <li className="text-white hover:text-gray-300">Modifiers</li>
          <li className="text-white hover:text-gray-300">Sculpting</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Course Preview */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">Blender 3D Fundamentals</h2>
              <p className="text-gray-500">
                Learn the basics of Blender 3D with a project-based approach.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Blender 3D"
                className="w-80 rounded-lg shadow-lg"
              />
              <FaPlayCircle className="absolute top-1/2 left-1/2 text-6xl text-white opacity-80 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
  export default Drawer