// real time editor

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
    <Editor
      apiKey='sau8y7wp48liemb22v7mcouxzenmcjmj7f1becz6tgdcxo4q'
      init={{
        // plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        // toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        plugins: [ 'table powerpaste',
          'lists media',
          'paste' ],
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue={defaultValue}
      onEditorChange={onChange}
    />
    )}
    />
    </div>
  
  );
}
