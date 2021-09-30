import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useGetfiles = (collection) => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot(snap => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setFiles(documents);
            });
        return () => {
            unsub();
        }
    }, [collection]);
    return { files };
}
export default useGetfiles;

