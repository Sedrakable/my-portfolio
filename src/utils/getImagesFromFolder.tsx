export const getImagesFromFolder = (folderName: string) => {
  const images: string[] = [];
  let i = 1;
  const imageFormats = ["JPG", "PNG", "jpg", "png"];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    let image: string | null;
    for (const format of imageFormats) {
      try {
        image = require(`../../public/static/projects/${folderName}/${i}.${format}`);
        break;
      } catch (error) {
        // console.log("not right fromat", format, error);
        image = null;
      }
    }
    if (image) {
      images.push(image);
      i++;
    } else {
      //   console.log("image doesnt exist, stopping loop");
      break;
    }
  }

  return images;
};

export const getCategoryImagesFromFolder = (
  folderName: string,
  name: string,
  multiple?: boolean
) => {
  const images: string[] = [];
  const newStr = name.replace(/ /g, "_");

  //IF ONE IMAGE
  if (!multiple) {
    let image: string | null;
    try {
      image = require(`../assets/art/${folderName}/${newStr}.jpg`);
    } catch (error) {
      image = null;
    }
    if (image) {
      images.push(image);
    }
    return images;
  }

  //IF MORE THAT ONE IMAGE
  let i = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let image: string | null;

    try {
      image = require(`../assets/art/${folderName}/${newStr}_${i}.jpg`);
    } catch (error) {
      image = null;
    }

    if (image) {
      images.push(image);
      i++;
    } else {
      break;
    }
  }

  return images;
};
