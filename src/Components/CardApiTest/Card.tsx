import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Card = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleDelete = (indexValue: number) => {
    const updatedPosts = posts.filter((_, index) => index !== indexValue);
    setPosts(updatedPosts);
  };

  // Step 1: Create a new state for edit mode
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tempTitle, setTempTitle] = useState<string>("");

  // Step 2: Toggling the edit mode
  const handleEditClick = (index: number, title: string) => {
    setEditingIndex(index);
    setTempTitle(title);
  };

  // Step 3: Handle title changes
  const handleTitleChange = (title: string) => {
    setTempTitle(title);
  };

  const handleTitleSave = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].title = tempTitle;
    setPosts(updatedPosts);
    setEditingIndex(null);
  };

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        setPosts(Response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="px-6 py-6">
      <div className="mx-4 my-4 p-6 bg-transparent rounded-xl">
        <h1 className="text-2xl font-bold mb-4 text-[#344767]">Post List</h1>
        <ul className="flex flex-wrap gap-4 py-3 mx-auto max-w-fit justify-center">
          {posts.map((post, index) => (
            <li
              className="w-60 flex flex-col justify-between px-4 pt-12 pb-8 my-2 rounded-2xl bg-white boxShadow"
              key={post.id}
            >
              <div>
                <h1 className="text-[#344767] font-semibold text-center ">
                  ID: {post.id}
                </h1>
                {editingIndex === index ? (
                  <div className="flex flex-col items-center space-x-2">
                    <input
                      value={tempTitle}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="mt-2 p-1 border rounded-lg w-full text-start"
                    />
                    <button
                      className="mx-auto border border-green-500 hover:bg-green-100 text-green-500 mt-2 px-3 py-0 rounded-[25px]"
                      onClick={() => handleTitleSave(index)}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <h2
                    onClick={() => handleEditClick(index, post.title)}
                    className="cursor-pointer text-[#67748e] h-20 capitalize mt-2 mb-7 text-center text-lg font-extralight"
                  >
                    {post.title}
                  </h2>
                )}
                <p className="text-[#344767] text-center text-sm mb-3 p-2">
                  {post.body}
                </p>
              </div>
              <button
                className="mx-auto mt-auto border border-red-500 hover:bg-red-100 text-red-500 px-5 py-2 rounded-[25px] flex items-center justify-center"
                onClick={() => handleDelete(index)}
              >
                Delete
                <FontAwesomeIcon className="ml-3" icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
