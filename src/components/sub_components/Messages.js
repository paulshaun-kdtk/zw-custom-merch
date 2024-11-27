"use client";
import { Toast } from "flowbite-react";

const toastPositionStyle = {
  position: "fixed",
  bottom: "1rem",
  right: "1rem",
  zIndex: 50,
};

export function MessageSuccess({ message = "", icon = Node }) {
  return (
    <div style={toastPositionStyle}>
      <Toast>
        <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-500 dark:bg-emerald-800 dark:text-emerald-200">
          {icon}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
}

export function MessageWarning({ message = "", icon = Node }) {
  return (
    <div style={toastPositionStyle}>
      <Toast>
        <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-500 dark:bg-yellow-800 dark:text-yellow-200">
          {icon}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
}

export function MessageFailure({ message = "", icon = Node }) {
  return (
    <div style={toastPositionStyle}>
      <Toast>
        <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          {icon}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
      </Toast>
    </div>
  );
}

export function MessageNeutral({ message = "", icon = Node }) {
  return (
    <div style={toastPositionStyle}>
      <Toast>
        <div className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-200">
          {icon}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
}
