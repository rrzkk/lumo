import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

const CustomMouseControls = (props) => {
  const { camera, gl } = useThree();
  const lastMousePosition = useRef({ x: 0, y: 0 });

  const spherical = useRef({
    theta: 0,
    phi: Math.PI / 2,
    radius: camera.position.length(),
  });

  useEffect(() => {
    const canvasElement = document.querySelector("canvas");
    const x = 10;
    const y = 20;
    const z = 20;

    spherical.current = {
      radius: Math.sqrt(x * x + y * y + z * z),
      theta: Math.atan2(y - 15, x),
      phi: Math.acos(z / Math.sqrt(x * x + y * y + z * z)),
    };

    const handleMouseMove = (e) => {
      const movementX = e.clientX - lastMousePosition.current.x;
      const movementY = e.clientY - lastMousePosition.current.y;

      spherical.current.theta -= movementX * 0.0002;
      spherical.current.phi -= movementY * 0.0002;

      // Clamp the azimuthal angle (theta)
      spherical.current.theta = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, spherical.current.theta)
      );

      // Clamp the polar angle (phi)
      spherical.current.phi = Math.max(
        Math.PI / 4,
        Math.min(Math.PI / 3, spherical.current.phi)
      );

      const radius = spherical.current.radius;

      camera.position.x =
        radius *
        Math.sin(spherical.current.phi) *
        Math.sin(spherical.current.theta);
      camera.position.y = radius * Math.cos(spherical.current.phi);
      camera.position.z =
        radius *
        Math.sin(spherical.current.phi) *
        Math.cos(spherical.current.theta);

      camera.lookAt(0, 0, 0);
      camera.updateMatrixWorld();

      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseWheel = (e) => {
      e.preventDefault();
      // Determine zoom direction
      const delta = e.deltaY < 0 ? 1 : -1;

      // Adjust the camera's zoom property and ensure it's within [10, 100] range
      camera.zoom = Math.min(Math.max(camera.zoom - delta * 0.25, 20), 50);

      // Important! After adjusting the zoom, you need to call the camera's updateProjectionMatrix method
      camera.updateProjectionMatrix();
    };

    canvasElement.addEventListener("mousemove", handleMouseMove);
    canvasElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      canvasElement.removeEventListener("mousemove", handleMouseMove);
      canvasElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [camera, gl.domElement]);

  return null;
};

export default CustomMouseControls;
