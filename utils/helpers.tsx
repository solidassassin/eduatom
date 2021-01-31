import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export function maxImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return <img {...props} style={{ maxWidth: "100%" }} />;
}
