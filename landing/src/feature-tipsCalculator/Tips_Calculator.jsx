import LeftPart from './components/LeftPart';
import RightPart from './components/RightPart';
import React, { createContext, useEffect, useState } from 'react';

export const TipsContext = createContext();
const initialState = {
  bill: 0,
  tip: 0,
  people: 1,
};

const TipsCalculator = () => {
  const [inputsInObject, setinputsInObject] = useState(initialState);
  const [totalBill, setTotalBill] = useState(0);
  const [tipByPerson, setTipByPerson] = useState(1);

  useEffect(() => {
    let total = (inputsInObject.bill * inputsInObject.tip) / 100;
    setTotalBill(total);

    let titByPer = total / inputsInObject.people;
    setTipByPerson(titByPer);
  }, [inputsInObject]);

  return (
    <div className="bg-teal-50 w-[100%] h-[70rem] m-0 font-mono">
      <div className="flex flex-cols-1 justify-center pt-16">
        <div>
          <div>SPLI</div>
          <div>TTER</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex rounded-md w-[920px] h-[481px] bg-white mt-36 p-6">
          <div className="flex ">
            <TipsContext.Provider value={{ inputsInObject, setinputsInObject }}>
              <LeftPart />
              <div className="">
                <RightPart total={totalBill} byPerson={tipByPerson} />
              </div>
            </TipsContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TipsCalculator;
