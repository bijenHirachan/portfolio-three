import {
  Image,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Sphere = ({ img }) => {
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial>
        <RenderTexture attach={"map"}>
          <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <color attach={"background"} args={["#333333"]} />

          <Image url={`/img/${img}`} transparent opacity={1} />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Sphere;
