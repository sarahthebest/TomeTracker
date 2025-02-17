import { useState } from "react";
import Btn from "../../Atoms/Btn";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Form, Input, Modal } from "antd";
import { useCreateList } from "../../../hooks/useCreateList";

const CreateBookList = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { error, success, createList } = useCreateList();
    const [formError, setFormError] = useState<string | null>(null);
    const [form] = Form.useForm();

    const handleSubmit = async (values: {
        listName: string;
        description: string;
    }) => {
        if (!values.listName.trim()) {
            setFormError("List name is required!");
            return;
        }

        setFormError(null);
        await createList(values.listName, values.description);
        setTimeout(() => {
            setIsDialogOpen(false);
            form.resetFields();
        }, 2000);
    };

    return (
        <>
            <Btn
                text="Create list"
                icon={<HiOutlinePencilSquare size={16} />}
                onClick={() => setIsDialogOpen(true)}
                backgroundColor="var(--primary)"
                hideText={true}
            />
            <Modal
                title="Create a new book list"
                open={isDialogOpen}
                onCancel={() => setIsDialogOpen(false)}
                footer={null}
                destroyOnClose={true}
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="List name"
                        name="listName"
                        rules={[
                            {
                                message: "Please enter a list name!",
                            },
                        ]}
                    >
                        <Input placeholder="Give you list a name" />
                    </Form.Item>
                    <Form.Item label="List description" name="description">
                        <Input placeholder="Give you list a description" />
                    </Form.Item>
                    {formError && <p className="text-red-600">{error}</p>}
                    {error && <p className="text-red-600">{error}</p>}
                    {success && <p className="text-green-600">{success}</p>}
                    <Form.Item className="my-2">
                        <Btn
                            text="Submit"
                            type="submit"
                            onClick={() => handleSubmit}
                            className="w-full"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default CreateBookList;
