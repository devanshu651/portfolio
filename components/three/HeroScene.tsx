"use client";

import { useEffect, useRef, useState } from "react";

type ThreeModule = typeof import("three");

function MobileHeroMesh() {
  return (
    <div className="mobile-hero-mesh" aria-hidden="true">
      <div />
      <span />
    </div>
  );
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mobileFallback, setMobileFallback] = useState(false);

  useEffect(() => {
    const isLowPower =
      window.innerWidth < 768 || (navigator.hardwareConcurrency || 8) < 4;

    if (isLowPower) {
      setMobileFallback(true);
      return;
    }

    let disposed = false;
    let frame = 0;
    let cleanup = () => {};

    async function init() {
      const THREE: ThreeModule = await import("three");
      if (disposed || !mountRef.current) return;

      const mount = mountRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
      camera.position.z = 160;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      mount.appendChild(renderer.domElement);

      const count = 1000;
      const positions = new Float32Array(count * 3);
      const base = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const violet = new THREE.Color("#6C63FF");
      const lavender = new THREE.Color("#A09FC0");

      for (let i = 0; i < count; i += 1) {
        const radius = 38 + Math.random() * 92;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta) * 0.62;
        const z = radius * Math.cos(phi) * 0.42;
        base[i * 3] = x;
        base[i * 3 + 1] = y;
        base[i * 3 + 2] = z;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const color = Math.random() > 0.72 ? violet : lavender;
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 1.6,
        vertexColors: true,
        transparent: true,
        opacity: 0.92,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const cursor = new THREE.Vector2(999, 999);
      const target = new THREE.Vector2(999, 999);
      const rect = () => mount.getBoundingClientRect();

      function resize() {
        const box = rect();
        renderer.setSize(box.width, box.height, false);
        camera.aspect = box.width / box.height;
        camera.updateProjectionMatrix();
      }

      function onPointerMove(event: PointerEvent) {
        const box = rect();
        target.x = ((event.clientX - box.left) / box.width - 0.5) * 190;
        target.y = -((event.clientY - box.top) / box.height - 0.5) * 120;
      }

      function animate(time: number) {
        if (disposed) return;
        cursor.lerp(target, 0.12);
        const t = time * 0.001;

        for (let i = 0; i < count; i += 1) {
          const ix = i * 3;
          const bx = base[ix];
          const by = base[ix + 1];
          const bz = base[ix + 2];
          const drift = Math.sin(t + i * 0.031) * 1.8;
          let x = bx + drift;
          let y = by + Math.cos(t * 0.8 + i * 0.019) * 1.4;
          const dx = x - cursor.x;
          const dy = y - cursor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const force = (1 - distance / 80) * 26;
            x += (dx / Math.max(distance, 1)) * force;
            y += (dy / Math.max(distance, 1)) * force;
          }

          positions[ix] = x;
          positions[ix + 1] = y;
          positions[ix + 2] = bz + Math.sin(t * 0.65 + i) * 1.1;
        }

        geometry.attributes.position.needsUpdate = true;
        points.rotation.y = Math.sin(t * 0.18) * 0.11;
        points.rotation.x = Math.cos(t * 0.14) * 0.055;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      }

      resize();
      mount.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", resize);
      frame = requestAnimationFrame(animate);

      cleanup = () => {
        cancelAnimationFrame(frame);
        mount.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("resize", resize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    init();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  if (mobileFallback) return <MobileHeroMesh />;

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />;
}
