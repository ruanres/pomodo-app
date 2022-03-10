import React, {Profiler, useEffect} from 'react';

interface Props {
  name: number
};

const Child = ({name}: Props) => (
  <div>
    Child {name}  
  </div>
);

export const ChildFC: React.FC<Props> = ({name}) => {
  const start = performance.now();
  let end = 0;

  useEffect(()  =>  {
    console.log("mounted");
    end = performance.now();
    console.log({time: end - start });
    
  }, []);

  return(
    <div>
      Child {name}  
    </div>
  );
  };

export default Child;
