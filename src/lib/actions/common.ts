export const uploadImage = async (file: File | null): Promise<string> => {
  try {
    const form = new FormData();
    form.append("file", file!);
    form.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    if (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      form.append(
        "cloud_name",
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string
      );
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      const data = await response.json();

      return data.secure_url;
    } else {
      console.log("Failed to upload image");
      return "";
    }
  } catch (e) {
    console.log(e);
    console.log("Something went wrong.");
    return "";
  }
};

export const isWithinRange = (date: Date, start: Date, end: Date) => {
  return date >= start && date <= end;
};
