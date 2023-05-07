import LeftPart from './components/LeftPart';
import React, { createContext, useState } from 'react';

export const TipsContext = createContext();
const initialState = {
  bill: undefined,
  tip: undefined,
  people: undefined,
};

const TipsCalculator = () => {
  const [inputsInObject, setinputsInObject] = useState(initialState);
  console.log(inputsInObject);

  return (
    <div className="bg-teal-50 w-[100%] h-[70rem] m-0">
      <div className="flex flex-cols-1 justify-center pt-16">
        <div>
          <div>SPLI</div>
          <div>TTER</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex rounded-md w-[920px] h-[481px] bg-white mt-36">
          <div>
            <TipsContext.Provider value={{ inputsInObject, setinputsInObject }}>
              <LeftPart />
            </TipsContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TipsCalculator;
