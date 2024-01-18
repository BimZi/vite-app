export const getImageURL = (imageName) => {
  console.log(import.meta.env.VITE_IMAGE_DIR)

  return `${import.meta.env.VITE_IMAGE_DIR}${imageName}`
}