"use client"
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
      setEditorHtml('test');
  };


  return (
    <div className='mx-4'>
      <input 
        placeholder='Title'
        className='my-4 bg-border outline h-8 p-5'
      />
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={TextEditor.modules}
      />
    </div>
  );
};

// Quill modules configuration
TextEditor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    ['link', 'image'],
    ['clean']
  ]
};

export default TextEditor;


// import dynamic from 'next/dynamic';

// // Import ReactQuill asynchronously
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// const MyTextEditor = () => {
//   return (
//     <div>
//       <h2>Text Editor</h2>
//       <ReactQuill modules={MyTextEditor.modules} />
//     </div>
//   );
// };

// // Quill modules configuration
// MyTextEditor.modules = {
//   // Your module configuration here
// };

// export default MyTextEditor;
