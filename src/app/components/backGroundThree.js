"use client";

import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
import { EdgesGeometry, LineBasicMaterial, LineSegments } from "three";
import * as THREE from "three";

import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useControls, button } from "leva";

import { useState, useEffect } from "react";

const BackGroundThree = () => {
  const [zoom, setZoom] = useState(40); // default value
  const [scenePosition, setScenePosition] = useState([0, 0, 0]); // default position for the entire scene

  useEffect(() => {
    // Calculate the zoom based on window width
    const calculateZoom = () => {
      const windowWidth = window.innerWidth;

      const windowHeight = window.innerHeight;

      if (windowHeight > windowWidth) {
        setZoom(40);
        setScenePosition([0, 10, 0]); // Adjust this to move the entire scene higher on the screen
      } else {
        setScenePosition([0, 0, 0]); // Default position for desktop
      }
    };

    // Call it once initially
    calculateZoom();

    // Add an event listener to recalculate when the window is resized
    window.addEventListener("resize", calculateZoom);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateZoom);
    };
  }, []);

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [10, 20, 20], zoom: zoom }}
      gl={{ alpha: true, preserveDrawingBuffer: true }}
    >
      {/* <color attach="background" args={["#f2f2f5"]} /> */}
      {/** The text and the grid */}

      {<Grid />}

      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
    </Canvas>
  );
};

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#999" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ":" + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper args={[100, 100, "#bbb", "#bbb"]} position={[0, -0.01, 0]} />
  </Instances>
);

export default BackGroundThree;
