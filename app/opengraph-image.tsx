import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt =
  "Carlos J. Sanchez, full-stack software engineer building business software, integrations, and customer-facing products.";

export const size = socialImageSize;

export const contentType = socialImageContentType;

export default async function Image() {
  return createSocialImage();
}
