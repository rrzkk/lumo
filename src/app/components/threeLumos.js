"use client";

import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
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
import CustomOrbitControls from "../utils/CustomOrbitControls";

import { useRef, useState } from "react";

const ThreeLumos = () => {
  const config = {
    text: "LUMOS",
    backside: true,
    backsideThickness: 0.3,
    samples: 16,
    resolution: 1024,
    transmission: 1,
    clearcoat: 0,
    clearcoatRoughness: 0.0,
    thickness: 0.3,
    chromaticAberration: 5,
    anisotropy: 0.3,
    roughness: 0,
    distortion: 0.5,
    distortionScale: 0.1,
    temporalDistortion: 0.3,
    ior: 1.5,
    color: "#ff9cf5",
    gColor: "#ff7eb3",
    shadow: "#750d57",
    autoRotate: false,
  };
  const { autoRotate, text, shadow } = config;
  const controlsRef = useRef();


  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [10, 20, 20], zoom: 30 }}
      gl={{ alpha: true, preserveDrawingBuffer: true }}
     
    >
      {/* <color attach="background" args={["#f2f2f5"]} /> */}
      {/** The text and the grid */}
      <Text
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 2.25]}
      >
        {text}
      </Text>
      {/** Controls */}
      <CustomOrbitControls
        ref={controlsRef}
  
        autoRotate={autoRotate}
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        enablePan={false}
        dampingFactor={0.05}
      />

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

function Text({
  children,
  config,
  font = "/Inter_Medium_Regular.json",
  ...props
}) {
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
        {/* <Grid /> */}
      </group>
    </>
  );
}

export default ThreeLumos;

// const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
//   // Renders a grid and crosses as instances
//   <Instances position={[0, -1.02, 0]}>
//     <planeGeometry args={[lineWidth, height]} />
//     <meshBasicMaterial color="#999" />
//     {Array.from({ length: number }, (_, y) =>
//       Array.from({ length: number }, (_, x) => (
//         <group
//           key={x + ":" + y}
//           position={[
//             x * 2 - Math.floor(number / 2) * 2,
//             -0.01,
//             y * 2 - Math.floor(number / 2) * 2,
//           ]}
//         >
//           <Instance rotation={[-Math.PI / 2, 0, 0]} />
//           <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
//         </group>
//       ))
//     )}
//     <gridHelper args={[100, 100, "#bbb", "#bbb"]} position={[0, -0.01, 0]} />
//   </Instances>
// );

//   const { autoRotate, text, shadow, ...config } = useControls({
//     text: "LUMOS",
//     backside: true,
//     backsideThickness: { value: 0.3, min: 0, max: 2 },
//     samples: { value: 16, min: 1, max: 32, step: 1 },
//     resolution: { value: 1024, min: 64, max: 2048, step: 64 },
//     transmission: { value: 1, min: 0, max: 1 },
//     clearcoat: { value: 0, min: 0.1, max: 1 },
//     clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
//     thickness: { value: 0.3, min: 0, max: 5 },
//     chromaticAberration: { value: 5, min: 0, max: 5 },
//     anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
//     roughness: { value: 0, min: 0, max: 1, step: 0.01 },
//     distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
//     distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
//     temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
//     ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
//     color: "#ff9cf5",
//     gColor: "#ff7eb3",
//     shadow: "#750d57",
//     autoRotate: false,
//     screenshot: button(() => {
//       // Save the canvas as a *.png
//       const link = document.createElement("a");
//       link.setAttribute("download", "canvas.png");
//       link.setAttribute(
//         "href",
//         document
//           .querySelector("canvas")
//           .toDataURL("image/png")
//           .replace("image/png", "image/octet-stream")
//       );
//       link.click();
//     }),
//   });
