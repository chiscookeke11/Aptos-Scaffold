import { toast } from "react-toastify"



export const handleCopy = (text:  string) => {
    navigator.clipboard.writeText(text)
    .then(() => toast.success("Copied to clipboard"))
    .catch(err => toast.error("Error copying:", err))
}