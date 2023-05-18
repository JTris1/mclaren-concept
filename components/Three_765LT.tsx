"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Three_765LT(props: {}) {
  const group = useRef();
  const gltf: any = useGLTF("models/scene.gltf");

  let meshes: Array<object> = [];
  let object3d: Array<object> = [];

  console.log(gltf);
  // Object.keys(gltf.nodes).map((node) => {
  //   const obj = gltf.nodes[node];
  //   if (obj.type === "Mesh") {
  //     meshes = [...meshes, obj];
  //   }
  //   if (obj.type === "Object3D") {
  //     object3d = [...object3d, obj];
  //   }
  // });

  return (
    <group {...props} dispose={null}>
      <scene></scene>
    </group>
  );
}
