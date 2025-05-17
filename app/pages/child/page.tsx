"use client";
import dynamic from 'next/dynamic'

// const QAWidget = dynamic(
//     () => import('@gigit-ai/gigit-apps').then((module) => module.QAWidget),
//     {
//         ssr: false,
//     }
// )

const Button = dynamic(
  () => import("@/components/ui/button").then((mod) => mod.Button),
  { ssr: false }
);

export function Child() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Child Page</h1>
      <p>This is a child page.</p>
      <Button>Click me</Button>

    </div>
  );
}
