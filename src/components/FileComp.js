import React, { useState } from 'react';
import './filecomp.css';
import ProgressBar from './ProgressBar'

const FileComp = () => {
	const [file, setFiles] = useState(null);
	const [error, setError] = useState('');

	const isValidFile = ["image/png", "image/jpg", "image/jpeg"];

	const fileHandler = (e) => {
		setError(''); //Clear the past error every time,when u are uploading a new file
		let fileChosen = e.target.files[0];
		if (fileChosen !== "" && isValidFile.includes(fileChosen.type)) {
			setFiles(fileChosen);
		} else {
			setError('Invalid file selected');
		}
	}
	
	return (
		<div className="file_container">
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="file-upload">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvBIjGn6ImMmLnbrpHQs_mOadUdiF8a231g&usqp=CAU" alt="File Upload" />
						<input type="file" name="picture" onChange={fileHandler} />
					</div>
					{file  && <p>{file.name}</p>}
				</div>
			</div>
			
			{error && 			
			<div className="alert alert-danger"><strong>Danger!</strong> {error}.</div>}
			{file && <ProgressBar file={file} onSetFile={setFiles}/>}
		</div>
	)
}
export default FileComp;