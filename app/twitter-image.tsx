import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "../lib/social-image";

export const alt =
  "Carlos J. Sanchez portfolio social card for full-stack, product, and platform engineering work.";

export const size = socialImageSize;

export const contentType = socialImageContentType;

export default async function Image() {
  return createSocialImage();
}
