import {useState,useEffect} from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useFileUpload = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('Images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
          }, (err) => {
            setError(err);
          }, async () => {
            const url = await storageRef.getDownloadURL();

            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt,fileName:file.name });
            setUrl(url);
        });
    },[file]);
    return {progress,url,error};
}
export default useFileUpload;