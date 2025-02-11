import { RiDeleteBin5Line } from "react-icons/ri";
import Btn from "../../Atoms/Btn";
import { getErrorMessage } from "../../../utils/globalUtils";
import { message } from "antd";
import { useBookStore } from "../../../stores/useBookStore";

interface Props {
    bookId: string;
}

const DeleteBookBtn: React.FC<Props> = ({ bookId }) => {
    const {deleteBook} = useBookStore();
    const [messageApi, contextHolder] = message.useMessage();
    const fetchBooks = useBookStore(state => state.fetchBooks);


    const handleDelete = async () => {
        try {
            await deleteBook(bookId);  
            setTimeout(() => {
                fetchBooks();
            }, 1000);
            messageApi.success("Book deleted");
        } catch (error) {
            console.error(getErrorMessage(error));
            messageApi.error("Error deleting book");
        }
    };

    return (
        <>
            {contextHolder}
            <Btn 
                icon={<RiDeleteBin5Line />} 
                onClick={handleDelete} 
                className="w-fit place-self-end" 
            />
        </>
    );
};

export default DeleteBookBtn;
