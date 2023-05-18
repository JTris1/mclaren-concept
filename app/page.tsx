"use client";

import * as THREE from "three";
import { useRef, useState, Suspense } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { Stage, OrbitControls, TransformControls } from "@react-three/drei";
import Model_765LT from "~/components/Model_765LT";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="h-screen w-full">
        <Canvas
          camera={{
            fov: 50,
            near: 0.1,
            far: 10,
            position: [0, 0, -10],
          }}
        >
          <Suspense fallback={null}>
            <Stage
              intensity={0.05}
              environment={"night"}
              shadows={{
                type: "accumulative",
                color: "#000000",
                colorBlend: 2,
                opacity: 2,
              }}
              adjustCamera={0.9}
            >
              <Model_765LT />
            </Stage>
          </Suspense>
          {/* <ambientLight intensity={1} color={"white"} />
          <directionalLight
            intensity={2}
            color={"white"}
            position={[1, 1, 1]}
          /> */}

          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </main>
  );
}
