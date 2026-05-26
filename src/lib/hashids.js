import Hashids from "hashids";

const hashids = new Hashids("Indel-salt", 10); // 10-char hash

export function encodeId(id) {
  return hashids.encode(id);
}

export function decodeId(hash) {
  return hashids.decode(hash)[0]; // returns an array
}
