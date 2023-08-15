import { Link } from "react-router-dom";
import { IBook } from "../interface/IBook";

const BookCard: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <div className="hover:shadow-xl shadow p-3">
      <Link to={`/details/${book._id}`}>
        <img
          className=" w-full h-32 rounded-lg md:h-60"
          src={book.image}
          alt="book"
        />

        <div className="mt-8">
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            {book.title?.slice(0, 20)}...
          </h2>
          <p className="text-[14px]">Author : {book.author?.slice(0, 30)}</p>
          <p className="text-[14px]">Genre : {book.genre}</p>
          <p className="text-[14px]">
            Publication Date : {book.publication_date}
          </p>

          <p className="mt-2 text-gray-900 ">
            {book.description?.slice(0, 40)}...
          </p>

          <div className="flex items-center justify-end mt-4"></div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
