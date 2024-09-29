import './App.css'

function App() {

  return (
      <>
          <div className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
          >
              <div className="absolute inset-0 bg-black bg-opacity-100">
                  <div className="flex flex-col items-center justify-center h-full text-white">
                      <h1 className="text-6xl font-bold mb-4">MANAN</h1>
                      <h2 className="text-4xl font-semibold mb-8 text-center">
                          TRIP TO ARAVALI BIODIVERSITY PARK
                      </h2>
                      <div className="space-x-4">
                          <button
                              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                              <a href={""}>Download PDF</a>
                          </button>
                          <button
                              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                              <a href={"https://www.overleaf.com/read/bzhbkrkwgfkf#fc935b"}>Overleaf</a>
                          </button>
                      </div>
                  </div>
              </div>

          </div>
          <footer className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4">
              <p>© 2024 Manan R. Kumar. All rights reserved.</p>
          </footer>
      </>
  )
}

export default App
