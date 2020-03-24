import React from 'react';
import './App.css';

import VtkControlPanel from './components/VtkControlPanel';

import { getVtkFullScreenRenderComponents, getVtkConeInstance } from './middleware/services/vtkservice';

// @ts-ignore

function App() {
   // @ts-ignore
  const [ figure, setFigure ] = React.useState(getVtkConeInstance());
  const [ resolution, setResolution ] = React.useState(3);
  const [ renderer, setRenderer ] = React.useState();
  const [ renderWindow, setRenderWindow ] = React.useState();
  const [ actor, setActor ] = React.useState();

  
  React.useEffect( () => {
    // @ts-ignore
    const renderComponents = getVtkFullScreenRenderComponents(figure);
    renderComponents.renderer.setBackground(1, 0, 0);
    renderComponents.actor.getProperty().setColor(0, 0, 0.83);
    setRenderer(renderComponents.renderer as any);
    setRenderWindow(renderComponents.renderWindow as any);
    setActor(renderComponents.actor as any)
   
  }, [figure])
  
  React.useEffect( () => {
      figure.setResolution(resolution);
      if (renderWindow !== undefined) {
         //@ts-ignore Object is possibly 'undefined'
        renderWindow.render();
      }
  }, [resolution, figure, renderWindow])


  const handleChange = (event: any, newValue: number | number[]) => {
    setResolution(newValue as number);
  };

  const handleBackgroundChange = (event: any, newValue: number[]) => {    
    //@ts-ignore Object is possibly 'undefined'
    renderer.setBackground(newValue[0], newValue[1], newValue[2]);
    //@ts-ignore Object is possibly 'undefined'
    renderWindow.render()
  }

  const handleFigureChange = (event: any, newValue: number | number[]) => {
    //@ts-ignore Object is possibly 'undefined'
    actor.getProperty().setColor(newValue[0], newValue[1], newValue[2])
    if (renderWindow !== undefined) {
      //@ts-ignore Object is possibly 'undefined'
     renderWindow.render();
   }
  }

  return (
     <VtkControlPanel 
        onResolutionChange={handleChange} 
        onBackgroundChange={handleBackgroundChange}
        onFigureChange={handleFigureChange}
      />
  );
}

export default App;
