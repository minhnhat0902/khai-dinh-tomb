import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useState } from "react";

type GLTFResult = GLTF & {
  nodes: {
    bi_dinh: THREE.Mesh;
    cung_thien_dinh: THREE.Mesh;
    hanh_lang: THREE.Mesh;
    nghi_mon: THREE.Mesh;
    tam_quan: THREE.Mesh;
    tuong_phai: THREE.Mesh;
    tuong_trai: THREE.Mesh;
    tru_bieu_phai: THREE.Mesh;
    tru_bieu_trai: THREE.Mesh;
    tong_tu_phai: THREE.Mesh;
    tong_tu_trai: THREE.Mesh;
    bac_cap: THREE.Mesh;
    thanh_chan: THREE.Mesh;
    san_0: THREE.Mesh;
    san_1: THREE.Mesh;
    san_2: THREE.Mesh;
    san_3: THREE.Mesh;
    san_4: THREE.Mesh;
    san_5: THREE.Mesh;
  };
  materials: {};
};

interface InteractiveProps {
  id: string;
  children: React.ReactNode;
}

function Interactive({ id, children }: InteractiveProps) {
  return (
    <mesh
      onClick={() => (window.location.href = `#${id}`)}
    >
      {children}
    </mesh>
  );
}

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/model_2.glb") as GLTFResult;
  console.log(nodes.bi_dinh.material);

  return (
    <group {...props} dispose={null}>
      <Interactive id="bi_dinh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bi_dinh.geometry}
          material={nodes.bi_dinh.material}
          position={[-0.113, 1.514, 0.993]}
        />
      </Interactive>
      <Interactive id="thien_dinh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cung_thien_dinh.geometry}
          material={nodes.cung_thien_dinh.material}
          position={[0.087, 2.77, -2.94]}
          scale={0.194}
          onClick={() => (window.location.href = "#thien_dinh")}
        />
      </Interactive>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hanh_lang.geometry}
        material={nodes.hanh_lang.material}
        position={[-2.174, 2.671, -3.104]}
        scale={0.1}
      />
      <Interactive id="nghi_mon">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nghi_mon.geometry}
          material={nodes.nghi_mon.material}
          position={[0, 0.92, 4.296]}
        />
      </Interactive>
      <Interactive id="tam_quan">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tam_quan.geometry}
          material={nodes.tam_quan.material}
          position={[0.157, 0.327, 7.05]}
        />
      </Interactive>
      <Interactive id="tuong">
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tuong_phai.geometry}
            material={nodes.tuong_phai.material}
            position={[-1.133, 1.514, 1.93]}
            scale={0.041}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tuong_trai.geometry}
            material={nodes.tuong_trai.material}
            position={[0.996, 1.514, 1.93]}
            rotation={[-Math.PI, 0, 0]}
            scale={-0.041}
          />
        </group>
      </Interactive>
      <Interactive id="tru_bieu">
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tru_bieu_phai.geometry}
            material={nodes.tru_bieu_phai.material}
            position={[-3.955, 0.92, 4.296]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tru_bieu_trai.geometry}
            material={nodes.tru_bieu_trai.material}
            position={[0.046, 0.92, 4.296]}
          />
        </group>
      </Interactive>
      <Interactive id="tong_tu">
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tong_tu_phai.geometry}
            material={nodes.tong_tu_phai.material}
            position={[-1.784, 1.92, 3.886]}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tong_tu_trai.geometry}
            material={nodes.tong_tu_trai.material}
            position={[1.693, 1.92, 3.886]}
          />
        </group>
      </Interactive>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bac_cap.geometry}
          material={nodes.bac_cap.material}
          position={[0.87, 1.865, 0.921]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thanh_chan.geometry}
          material={nodes.thanh_chan.material}
          position={[0.87, 1.865, 0.921]}
        />
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.san_0.geometry}
          material={nodes.san_0.material}
          position={[0, 0.92, 4.296]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.san_1.geometry}
          material={nodes.san_1.material}
          position={[0, 0.92, 4.296]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.san_2.geometry}
          material={nodes.san_2.material}
          position={[0, 0.92, 4.296]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.san_3.geometry}
          material={nodes.san_3.material}
          position={[0, 0.92, 4.296]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.san_4.geometry}
          material={nodes.san_4.material}
          position={[0, 0.92, 4.296]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.san_5.geometry}
          material={nodes.san_5.material}
          position={[0, 0.92, 4.296]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model_2.glb");
