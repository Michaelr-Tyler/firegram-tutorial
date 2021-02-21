import React, {useState} from 'react';

const UploadForm = () => {
  const [file, setfile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg', 'image/PNG', 'image/jpg', 'image/JPG', 'image/JPEG']

  const changeHandler = e => {
    let selected = e.target.files[0];
    

    if(selected && types.includes(selected.type)) {
      setfile(selected)
      setError('')
    } else {
      setfile(null);
      setError('Please select an image file (png or jpeg)');
    }
  }

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div className="file">{ file.name }</div>}
      </div>
    </form>
  )

}

export default UploadForm;