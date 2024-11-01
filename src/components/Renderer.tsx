import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import Model from "./Model";

interface RendererProps {
  lang: string;
}

export default function Renderer({ lang }: RendererProps) {
  const [floor, setFloor] = useState("0");

  return (
    <div className="renderer">
      <Canvas
        camera={{
          position: [3.567, 5.78, 12.208],
          rotation: [-27.24, 20.59, 10.26],
          fov: 50,
        }}
      >
        <Suspense fallback={null}>
          <Model position={[1, 0, 0]}/>
          <OrbitControls zoomSpeed={0.8} panSpeed={0.6}/>
          <Environment preset="city" environmentIntensity={0.5} />
        </Suspense>
      </Canvas>
      {/* {lang === "vi" ? (
        <div>
          <select
            name="Số tầng"
            id="floor-select"
            onChange={(e) => setFloor(e.target.value)}
          >
            <option value="0">Toàn bộ</option>
            <option value="1">Tầng 1</option>
            <option value="2">Tầng 2</option>
            <option value="5">Tầng 5</option>
          </select>
        </div>
      ) : (
        <div>
          <select
            name="Floor number"
            id="floor-select"
            onChange={(e) => setFloor(e.target.value)}
          >
            <option value="0">Entire</option>
            <option value="1">1st floor</option>
            <option value="2">2nd floor</option>
            <option value="5">5th floor</option>
          </select>
        </div>
      )} */}
    </div>
  );
}
