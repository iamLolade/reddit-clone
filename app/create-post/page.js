import TextEditor from "@/components/textEditor";
import { RiArrowDownSLine } from "react-icons/ri";

const CreatePost = () => {
    return (
        <main className="flex flex-col px-1 lg:px-16 w-auto lg:w-3/5 my-6">
            <div className="flex items-center justify-between border-b-2 border-border w-full p-4">
                <p>Create a new post</p>
                <p>Drafts<span className="ml-1 p-2 bg-border">0</span></p>
            </div>
            <div className="flex justfify-between bg-border w-1/5 m-4 p-2 px-4">
                <p className="text-sm">Choose community</p>
                <RiArrowDownSLine size={22} />
            </div>
            <div className="m-4 p-2 bg-border">
                <TextEditor />
                <div className="flex justify-end m-6">
                    <div className="flex space-x-4 text-sm">
                        <button className="rounded-xl outline p-2 px-4">Save Draft</button>
                        <button className="rounded-xl bg-gray-200 p-2 px-4">Post</button>
                    </div>
                </div>
            </div>
            <div className="h-20 m-4 mt-0 p-4 bg-gray-800 flex items-center space-x-4">
                <input type='checkbox' />
                <p className="text-sm">Send me post reply notifications</p>
            </div>
        </main>
    )
}

export default CreatePost;


  