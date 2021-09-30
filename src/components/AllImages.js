import React from 'react';
import './allimages.css';
import useGetallfiles from '../hooks/useGetallfiles';


const AllImages = () => {
	const {files} = useGetallfiles('Images');
	
    return (
		<div className="file_content">
			<h2>Your Files</h2>
			{
				files.map(f=>(
				<div className="gallery" key={f.id}>
					<img className="img-responsive" src={f.url} alt="Cinque Terre" style={{height:"200px",width:"200px"}}/>
				  <div className="desc">{f.fileName}</div>
				</div>
				))
			}
		</div>
    )
}
export default AllImages;