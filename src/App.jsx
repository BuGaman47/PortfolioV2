import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 flex gap-10 overflow-visible">

        {/* Left - fixed */}
        <div className="w-[320px] shrink-0 overflow-visible">
          <div className="sticky top-16 overflow-visible">
            <LeftSection />
          </div>
        </div>

        {/* Right - scrollable */}
        <div id="right-panel" className="flex-1 h-screen overflow-y-auto pr-2">
          <RightSection />
        </div>

      </div>
    </div>
  )
}

export default App