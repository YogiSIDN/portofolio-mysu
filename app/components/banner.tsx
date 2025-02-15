import React from "react";

function Banner({ icon, label }: { icon: string, label: string }): React.ReactNode {
  return (
    <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 my-1">
      <span className="w-5">{icon}</span>
      <span className="text-banner text-xs">{label}</span>
    </div>
  );
}

function Banners(): React.ReactNode {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
      <Banner icon="💻" label="CODE LIFE" />
      <Banner icon="🎌" label="WEEB NATION" />
      <Banner icon="📖" label="MANGA READER" />
      <Banner icon="🎧" label="PLAY LIST ADDICT" />
      <Banner icon="🧠" label="STAY CURIOUS" />
    </div>
  );
}

export default Banners;