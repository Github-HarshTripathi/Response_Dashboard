import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsWidget = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 mb-6">
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList className="flex flex-wrap justify-around md:justify-between text-white mb-4">
          <Tab className="cursor-pointer py-2 px-4 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-600 transition transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl" selectedClassName="bg-gray-600">
            About Me
          </Tab>
          <Tab className="cursor-pointer py-2 px-4 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-600 transition transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl" selectedClassName="bg-gray-600">
            Experiences
          </Tab>
          <Tab className="cursor-pointer py-2 px-4 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-600 transition transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl" selectedClassName="bg-gray-600">
            Recommended
          </Tab>
        </TabList>

        <div>
          <TabPanel>
            <p className="text-white bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            Hello! I’m Vishal Kumar, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </TabPanel>
          <TabPanel>
            <p className="text-white bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              Experience 1: Worked at Salesforce for 3 years...
            </p>
          </TabPanel>
          <TabPanel>
            <p className="text-white bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              Recommended by: John, Alex...
            </p>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsWidget;
