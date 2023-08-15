import { toast } from "react-hot-toast";
import { IBook } from "../interface/IBook";

import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { usePostBookMutation } from "../redux/api/bookApiSlice";
import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AddBook = () => {
  const { user } = useAppSelector((state) => state.user);
  const [postBook, { isSuccess }] = usePostBookMutation();
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const title = event.target.title.value;
    const photoUrl = event.target.photoUrl.value;
    const author = event.target.author.value;
    const genre = event.target.genre.value;
    const publication_date = event.target.publication_date.value;
    const description = event.target.description.value;

    const book: IBook = {
      title,
      image: photoUrl,
      author,
      email: user.email!,
      genre,
      publication_date,
      description,
    };
    postBook(book);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book created succesfully...");
      navigate("/all-books");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="p-6 flex items-center justify-center my-10">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-10 ">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className=" text-xl font-semibold">Book Details</p>
              <p className="text-lg">Please fill out all the fields.</p>
            </div>
            <form className="lg:col-span-2" onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-3">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                    placeholder="title....."
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label>Photo Url</label>
                  <input
                    type="text"
                    name="photoUrl"
                    className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                    placeholder="Photo Url...."
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                    placeholder="author...."
                    required
                  />
                </div>

                <div className="md:col-span-3">
                  <label>Genre</label>
                  <input
                    type="text"
                    name="genre"
                    className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                    placeholder="genre....."
                    required
                  />
                </div>
                <div className="md:col-span-5">
                  <label>Publication Date</label>
                  <input
                    type="date"
                    name="publication_date"
                    className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                    placeholder="publication date....."
                    required
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Description</label>
                  <div className=" border-gray-400 rounded items-center mt-1">
                    <textarea
                      className="h-14 border mt-1 rounded px-4 pt-1 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                      name="description"
                      placeholder="Description...."
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end mt-3">
                <button
                  type="submit"
                  className="text-gray-200 rounded px-5 py-1 text-lg bg-rose-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
