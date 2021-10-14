import React from 'react';
import useUploadCsv from './useUploadCsv';

const App = () => {
    const { parsedData, uploadFileRef, onFileChange, isHeadersValid } = useUploadCsv()

    console.log(parsedData)

    return (
        <div>
            <input ref={uploadFileRef} onChange={onFileChange} type='file' accept='.csv' />
            {!isHeadersValid && <p>Invalid Headers</p>}
        </div>
    );
};

export default App;