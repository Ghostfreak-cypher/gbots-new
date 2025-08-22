// EventCard.js
import React from "react";

const Card = ({ id, title, description, date, location, image, status}) => {
  return (
    <article className={`card-base card-hover cursor-target border border-themed rounded-2xl overflow-hidden`}>
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {status && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-xs">{status}</div>
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        {(date || location) && (
          <p className="mt-1 text-sm text-themed-muted">{[date, location].filter(Boolean).join(" • ")}</p>
        )}
        {description && (
          <p className="mt-2 text-sm text-themed-muted">{description}</p>
        )}
      </div>
    </article>
  );
};



export default Card;