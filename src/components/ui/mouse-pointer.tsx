"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const requestRef = useRef<number>();
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  // マウスの移動を追跡して、目標位置を設定
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    if (isMouseDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseDevice]);

  // ポインターの追従アニメーション
  const animateCursor = () => {
    cursorX.current += (mouseX.current - cursorX.current) * 0.1;
    cursorY.current += (mouseY.current - cursorY.current) * 0.1;

    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorX.current}px`;
      cursorRef.current.style.top = `${cursorY.current}px`;
    }

    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    if (isMouseDevice) {
      requestRef.current = requestAnimationFrame(animateCursor);
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMouseDevice]);

  // ホバーエフェクト
  useEffect(() => {
    const addHoverEffect = () => setHover(true);
    const removeHoverEffect = () => setHover(false);

    if (isMouseDevice) {
      document.querySelectorAll("a, button, .hover-target").forEach((el) => {
        el.addEventListener("mouseenter", addHoverEffect);
        el.addEventListener("mouseleave", removeHoverEffect);
      });
    }

    return () => {
      if (isMouseDevice) {
        document.querySelectorAll("a, button, .hover-target").forEach((el) => {
          el.removeEventListener("mouseenter", addHoverEffect);
          el.removeEventListener("mouseleave", removeHoverEffect);
        });
      }
    };
  }, [isMouseDevice]);

  // マウスデバイスのチェック
  useEffect(() => {
    const checkIfMouseDevice = () => {
      if (window.matchMedia("(pointer: fine)").matches) {
        setIsMouseDevice(true);
      } else {
        setIsMouseDevice(false);
      }
    };

    checkIfMouseDevice();
    window.addEventListener("resize", checkIfMouseDevice);

    return () => {
      window.removeEventListener("resize", checkIfMouseDevice);
    };
  }, []);

  // マウスデバイスでない場合は何も表示しない
  if (!isMouseDevice) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hover ? "cursor-hover" : ""}`}
      style={{
        width: hover ? "30px" : "15px",
        height: hover ? "30px" : "15px",
        border: "1px solid white",
        borderRadius: "50%",
        backgroundColor: "transparent",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 10000,
        transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
        transform: "translate(-50%, -50%)", // 中心をカーソルの先端に調整
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // ドロップシャドウで視認性を向上
      }}
    />
  );
}