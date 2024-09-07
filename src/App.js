import React from 'react';
import TabsWidget from './components/TabsWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-900 hidden lg:block"></div> {/* Empty left half for laptop */}
      <div className="w-full lg:w-1/2 p-8 bg-gray-800 text-white">
        <TabsWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;
