//@ts-ignore
import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
//@ts-ignore
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
//@ts-ignore
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
//@ts-ignore
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';

// WRAPPING BASIC VTK INTERFACE as TYPES

export interface VtkFigure {
    setResolution(value: number): void,
    getOutputPort(): void,
}

export interface VtkActor {
    getProperty(): any,
}

export interface VtkRenderer {
    addActor(actor: any): void,
    resetCamera(): void,
    setBackground(r: number, g: number, b: number): void,
}

export interface VtkRenderWindow {
    render(): void,
}


// WRAPPING BASIC VTK INTERFACE as TYPES
export const getVtkFullScreenRenderComponents = (source: VtkFigure) => {
    const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance();
    const actor = vtkActor.newInstance();
    const mapper = vtkMapper.newInstance();

    actor.setMapper(mapper);
    mapper.setInputConnection(source.getOutputPort());

    const renderer = fullScreenRenderer.getRenderer();
    renderer.addActor(actor);
    renderer.resetCamera();

    const renderWindow = fullScreenRenderer.getRenderWindow();
    return {renderer: renderer as VtkRenderer, renderWindow: renderWindow as VtkRenderWindow, actor: actor as VtkActor} 
}

export const getVtkConeInstance = () => {
    const cone = vtkConeSource.newInstance() as VtkFigure;
    return cone;
}