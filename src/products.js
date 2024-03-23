import data from "./data.json";

// const a1 = data.reduce((map, obj) => map.set(obj.Title, obj), new Map());

const ids = data.map(({ Handle }) => Handle);
const filtered = data.filter(
  ({ Handle }, index) => !ids.includes(Handle, index + 1)
);

// console.log(filtered);
const ids1 = filtered.map(({ Image }) => Image);
const filtered1 = filtered.filter(
  ({ Image }, index) => !ids1.includes(Image, index + 1)
);
// console.log(res);
export const DT = filtered1;
