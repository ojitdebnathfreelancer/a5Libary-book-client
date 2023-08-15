import { Link, useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard";
import { IBook } from "../../interface/IBook";

import Loader from "../../utils/Loader";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { useGetBooksQuery } from "../../redux/api/bookApiSlice";

const AllBooks = () => {
  const path = useLocation().pathname;
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const { user } = useAppSelector((state) => state.user);
  const { data: books, isLoading } = useGetBooksQuery("");

  let content;

  if (books?.length) {
    content = books;
  }

  if (search) {
    content = books.filter(
      (book: IBook) =>
        book.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        book.genre.toLowerCase().includes(search.toLocaleLowerCase()) ||
        book.author.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  if (search && filter) {
    if (filter === "genre") {
      content = books.filter(
        (book: IBook) => book.genre.toLowerCase() === search.toLowerCase()
      );
    }
    if (filter === "publication_year") {
      content = books.filter(
        (book: IBook) =>
          book.publication_date.toLowerCase() === search.toLowerCase()
      );
    }
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container pt-14">
      <div className="md:flex justify-between">
        {path === "/all-books" && (
          <>
            <h2 className="text-gray-900 md:text-2xl text-xl border-b border-rose-600 inline-block">
              Books
            </h2>
            <div className="md:flex items-center mt-4 md:mt-0">
              <input
                className="px-4 py-1 border border-gray-500 focus:border-gray-800 outline-none rounded-md md:w-[350px] block"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                id="search"
                name="search"
                placeholder="Search...."
              />

              <select
                className="md:ml-2 mt-4 md:mt-0 px-3 py-1.5 border border-gray-500 focus:border-gray-800 outline-none rounded-md block"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                name="filter"
                id="filter"
              >
                <option value="">Select option</option>
                <option value="genre">Genre</option>
                <option value="publication_year">Publication year</option>
              </select>
            </div>
          </>
        )}
        {user.email && path === "/all-books" && (
          <div className="mt-4 md:mt-0">
            <Link
              to={"/add-book"}
              className="text-gray-200 rounded px-5  py-1 bg-rose-600 "
            >
              Add Book
            </Link>
          </div>
        )}
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 mb-8 ">
        {content.length ? (
          <>
            {path === "/all-books" ? (
              <>
                {content?.map((book: IBook) => (
                  <BookCard key={book._id} book={book} />
                ))}
              </>
            ) : (
              <>
                {books?.slice(0, 10).map((book: IBook) => (
                  <BookCard key={book._id} book={book} />
                ))}
              </>
            )}
          </>
        ) : (
          <p className="mt-4 text-lg">Not found</p>
        )}{" "}
      </div>
    </div>
  );
};

export default AllBooks;
