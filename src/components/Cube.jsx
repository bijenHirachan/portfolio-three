import {
  Image,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Cube = () => {
  const textRef = useRef();
  useFrame((state) => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 4;
  });

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach={"map"}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach={"background"} args={["#333333"]} />
          <Text ref={textRef} fontSize={3} color={"#e8e8e8"}>
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
