import { useRef, useState } from "react";
import { csvParse } from 'd3'
import { HEADER_TYPES } from "./headerConstants";

const useUploadCsv = () => {
    const [parsedData, setParsed] = useState([])
    const [isHeadersValid, setIsHeadersValid] = useState(false)
    const uploadFileRef = useRef(null)

    const checkHeaders = (row) => {
        const headers = Object.keys(row)
        const validHeaders = headers.every(header => HEADER_TYPES.includes(header))
        setIsHeadersValid(validHeaders)
        return validHeaders
    }

    const onFileChange = async () => {
        const text = await uploadFileRef.current.files[0].text()
        const data = await csvParse(text)
        checkHeaders(data[0])
        setParsed(data)
    }

    return { parsedData, uploadFileRef, onFileChange, isHeadersValid }
}

export default useUploadCsv