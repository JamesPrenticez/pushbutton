import React from "react";
import { CrossIcon } from "../icons/CrossTrashIcon";

function ChipsList({ items, handleRemoveKeyword }) {
  return (
    <div className="border border-dashed border-fuchsia-500 p-2 space-x-1 space-y-1">
      {items.map((item) => (
        <div 
          key={item.id}
          className="bg-ocean-1 inline-flex rounded-full text-sm px-[.5rem] py-[.15rem] items-center justify-center space-x-1"
        >
          <p>
            {item.name}
          </p>
          <button onClick={() => handleRemoveKeyword(item.id)}>
            <CrossIcon height={20} strokeWidth={1.5} color="rgb(239 68 68)" className="text-red-500"/>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChipsList;