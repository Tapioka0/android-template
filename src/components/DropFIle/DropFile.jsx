import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { uploadImgToGallery } from "../../store/slices/Menu/Menu";

export const DropZones = () => {
  const dispatch = useDispatch();
  return (
    <Dropzone
      onDrop={(file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = () => {
          const baseURL = reader.result;
          // console.log(baseURL);

          dispatch(uploadImgToGallery(baseURL));
        };
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section className="drop">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="drop_text">+</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
