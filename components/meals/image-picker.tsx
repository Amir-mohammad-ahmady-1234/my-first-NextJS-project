"use client";

import { ChangeEvent, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface Props {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: Props) {
  const [pickedImage, setPickedImage] = useState<null | string>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  function handleClick() {
    imageInput?.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>no Image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="the image selected by user." fill />
          )}
        </div>
        <input
          type="file"
          accept="images/png, image/jpeg"
          name={name}
          id={name}
          className={classes.input}
          ref={imageInput}
          onChange={(event) => handleImageChange(event)}
          required
        />
        <button className={classes.button} onClick={handleClick} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
