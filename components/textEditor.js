"use client"
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
      setEditorHtml(html);
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

