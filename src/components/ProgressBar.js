import React,{useEffect} from 'react';
import useFileUpload from '../hooks/useFileUpload';

const ProgressBar = ({file,onSetFile}) => {
    const {progress,url} = useFileUpload(file);
    useEffect(()=>{
        if(url){
            onSetFile('');
        }
    },[url,onSetFile]);
    
    return (
        <div className="container">
            <div className="progress">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%`}}></div>
            </div>
        </div>
    )
}
export default ProgressBar;