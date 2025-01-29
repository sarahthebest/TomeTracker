import { Flex, Input } from "antd";
import Btn from "../../Atoms/Btn";
import { useState } from "react";

const CreateList = () => {
    const [showInput, setShowInput] = useState(false);
    const [listName, setListName] = useState(""); 

    const handleCreateShelf = () => {
        setShowInput(true);
    };

    const createNewShelf = () => {
        console.log("New shelf created:", listName);
        setShowInput(false);
        setListName("");
    };

    return (
        <Flex className="flex-col gap-4">
            <Btn
                text="Add shelf"
                backgroundColor="var(--primary)"
                position="sticky"
                className="z-50"
                onClick={handleCreateShelf}
            />
            {showInput && (
                <>
                <Input
                    placeholder="List name"
                    value={listName}
                    onChange={(e) => setListName(e.target.value)} 
                    onPressEnter={createNewShelf} 
                />
                <Btn text="Create list"/>
                </>
            )}
        </Flex>
    );
};

export default CreateList;
