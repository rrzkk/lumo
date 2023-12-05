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
import CustomOrbitControls from "../utils/CustomOrbitControls";

import { useState, useEffect } from "react";

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
    chromaticAberration: 3,
    anisotropy: 0.6,
    roughness: 0,
    distortion: 0.8,
    distortionScale: 0.2,
    temporalDistortion: 0.3,
    ior: 0.8,
    color: "#ff9cf5",
    gColor: "#ff7eb3",
    shadow: "#750d57",
    autoRotate: false,
  };

  const { autoRotate, text, shadow } = config;

  const [zoom, setZoom] = useState(40); // default value
  const [scenePosition, setScenePosition] = useState([0, 0, 0]); // default position for the entire scene

  useEffect(() => {
    // Calculate the zoom based on window width
    const calculateZoom = () => {
      const windowWidth = window.innerWidth;

      const windowHeight = window.innerHeight;

      if (windowHeight > windowWidth) {
        setZoom(15);
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
      <group position={scenePosition}>
        <Text
          config={config}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 2.25]}
        >
          {text}
        </Text>
        <TextTwo
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[-12, -1, -1]}
          customizeScale={1}
        >
          Berry St
        </TextTwo>
        <TextTwo
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-8, -1, -8]}
          customizeScale={1}
        >
          Walker St
        </TextTwo>
        <TextTwo
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-10, -1, 5.25]}
          customizeScale={0.5}
        >
          Dension St
        </TextTwo>
        <TextTwo
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 7.25]}
          customizeScale={1}
        >
          Miller St
        </TextTwo>
        <TextTwo
          rotation={[-Math.PI / 2, 0, 0]}
          position={[3, -1, 13]}
          customizeScale={1}
        >
          Pacific Highway
        </TextTwo>

        <TextTwo
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, -6]}
          customizeScale={0.5}
        >
          Little Spring St
        </TextTwo>
        <TextTwo
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[12, -1, 1]}
          customizeScale={0.5}
        >
          Spring St
        </TextTwo>
      </group>
      {<Grid />}
      {/** Controls */}
      <CustomOrbitControls
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

function Text({
  children,
  config,
  font = "/Inter_Medium_Regular.json",
  ...props
}) {
  const texture = useLoader(RGBELoader, "/assets/aerodynamics_workshop.hdr");
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
      </group>
    </>
  );
}

function TextTwo({
  children,
  font = "/Inter_Medium_Regular.json", // Pointing to the font in the same folder
  customizeScale = 1,
  ...props
}) {
  const [color, setColor] = useState(0x000000);

  useEffect(() => {
    // Now we're in the browser context, so it's safe to access the window object
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setColor(isDarkMode ? 0x808080 : 0x808080);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      console.log(
        "Media query change detected:",
        e.matches ? "Dark Mode" : "Light Mode"
      );

      setColor(e.matches ? 0x808080 : 0x808080);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          {" "}
          {/* Adjusted scale to be 5 times smaller */}
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={customizeScale} // Adjusted scale to be 5 times smaller
            letterSpacing={-0.03}
            height={0.025}
            bevelSize={0.01}
            bevelSegments={5}
            curveSegments={64}
            bevelThickness={0.001}
          >
            {children}
            <meshBasicMaterial attach="material" color={color} />{" "}
            {/* Black material without texture */}
          </Text3D>
        </Center>
      </group>
    </>
  );
}

export default ThreeLumos;
