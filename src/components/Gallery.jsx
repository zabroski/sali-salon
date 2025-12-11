// // =======================
// // file: src/components/Gallery.jsx
// // =======================
// import React from "react";

// const PHOTOS = [
//   {
//     id: 1,
//     label: "Mid-back knotless with curls",
//   },
//   {
//     id: 2,
//     label: "Fulani tribal braids with beads",
//   },
//   {
//     id: 3,
//     label: "Kids’ cornrows with beads",
//   },
//   {
//     id: 4,
//     label: "Senegalese twists side part",
//   },
//   {
//     id: 5,
//     label: "Goddess boho locs",
//   },
//   {
//     id: 6,
//     label: "Classic box braids waist length",
//   },
// ];

// export default function Gallery() {
//   return (
//     <div className="container">
//       <div className="section-header section-header--center">
//         <h2>See the braids up close</h2>
//         {/* <p>
//           Real results on real clients. Add your own photos later to replace
//           these placeholders.
//         </p> */}
//       </div>

//       <div className="grid gallery-grid">
//         {PHOTOS.map((p) => (
//           <figure key={p.id} className="gallery-card">
//             <div className="gallery-card__image">{/* add img here */}</div>
//             <figcaption className="gallery-card__caption">
//               {p.label}
//             </figcaption>
//           </figure>
//         ))}
//       </div>
// {/* 
//       <p className="gallery__hint">
//         Tip: swap these blocks with your actual images (local files or a CDN).
//       </p> */}
//     </div>
//   );
// }
