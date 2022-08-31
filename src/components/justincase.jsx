// import { useState, useEffect } from 'react';
// import { insertImage } from '../../state/services/fetch-utils.js';
// import Alert from './Alert.jsx';

// export default function Post() {
//   const [fileInputState, setFileInputState] = useState('');
//   const [previewSource, setPreviewSource] = useState('');
//   const [selectedFile, setSelectedFile] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');
//   const [errMsg, setErrMsg] = useState('');

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     previewFile(file);
//     setSelectedFile(file);
//     setFileInputState(e.target.value);
//   };

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreviewSource(reader.result);
//     };
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!previewSource) return;
//   //   uploadImage(previewSource);
//   // };

//   const handleSubmitFile = (e) => {
//     e.preventDefault();
//     if (!selectedFile) return;
//     const reader = new FileReader();
//     reader.readAsDataURL(selectedFile);
//     reader.onloadend = async () => {
//       await insertImage(image);
//       reader.result;
//     };
//     reader.onerror = () => {
//       console.error('AHHHHHHHH!!');
//       setErrMsg('something went wrong!');
//     };
//   };

//   const uploadImage = async (image) => {
//     console.log('image', image);
//     try {
//       await insertImage(image);
//       setFileInputState('');
//       setPreviewSource('');
//       setSuccessMsg('Image uploaded successfully');
//     } catch (error) {
//       console.error(error);
//       console.error(err);
//       setErrMsg('Something went wrong!');
//     }
//   };

//   return (
//     <div>
//       <Alert msg={errMsg} type="danger" />
//       <Alert msg={successMsg} type="success" />
//       <form onSubmit={handleSubmitFile}>
//         <h1>upload pic here</h1>
//         <input
//           type="file"
//           name="image"
//           onChange={handleFileInputChange}
//           value={fileInputState}
//           className="form-input"
//         ></input>

//         <button type="submit">upload!</button>
//       </form>
//       {previewSource && <img src={previewSource} alt="image-preview" />}
//       Post
//     </div>
//   );
// }
