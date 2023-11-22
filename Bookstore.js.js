// import React, { useState } from 'react';

// const BookList = () = {
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [markedBooks, setMarkedBooks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const updateBookList = () = {
//     if (title && author) {
//       if (editIndex !== null) {
//          If editIndex is set, update the existing book
//         const updatedBooks = [...books];
//         updatedBooks[editIndex] = { title, author, isRead false };
//         setBooks(updatedBooks);
//         setEditIndex(null);
//       } else {
//          Otherwise, add a new book to the list
//         const newBook = { title, author, isRead false };
//         setBooks([...books, newBook]);
//       }
//       setTitle('');
//       setAuthor('');
//     }
//   };

//   const handleDelete = (index, isMarkedBook) = {
//     if (isMarkedBook) {
//       const updatedMarkedBooks = [...markedBooks];
//       updatedMarkedBooks.splice(index, 1);
//       setMarkedBooks(updatedMarkedBooks);
//     } else {
//       const updatedBooks = [...books];
//       updatedBooks.splice(index, 1);
//       setBooks(updatedBooks);
//       setEditIndex(null);
//     }
//   };

//   const handleMarkAsRead = (index) = {
//     const updatedBooks = [...books];
//     updatedBooks[index].isRead = true;
//     setBooks(updatedBooks);

//      Move marked book to the markedBooks array
//     setMarkedBooks([...markedBooks, updatedBooks[index]]);
//      Remove the marked book from the main books array
//     updatedBooks.splice(index, 1);
//     setBooks(updatedBooks);
//     setEditIndex(null);
//   };

//   const handleMarkAsUnread = (index) = {
//     const updatedMarkedBooks = [...markedBooks];
//     updatedMarkedBooks[index].isRead = false;
//     setMarkedBooks(updatedMarkedBooks);

//      Move the book back to the main books array
//     setBooks([...books, updatedMarkedBooks[index]]);
//      Remove the marked book from the markedBooks array
//     updatedMarkedBooks.splice(index, 1);
//     setMarkedBooks(updatedMarkedBooks);
//   };

//   const handleEdit = (index) = {
//     const bookToEdit = books[index];
//     setTitle(bookToEdit.title);
//     setAuthor(bookToEdit.author);
//     setEditIndex(index);
//   };

//   return (
//     div
//       div
//         input
//           type=text
//           placeholder=Enter title
//           value={title}
//           onChange={(e) = setTitle(e.target.value)}
        
//         input
//           type=text
//           placeholder=Enter author
//           value={author}
//           onChange={(e) = setAuthor(e.target.value)}
        
//         button onClick={updateBookList}
//           {editIndex !== null  'Update'  'Add'}
//         button
//       div

//       div
//         h2Book Listh2
//         ul
//           {books.map((book, index) = (
//             li key={index}
//               {`${book.title} by ${book.author} `}
//               button onClick={() = handleDelete(index, false)}Deletebutton
//               button onClick={() = handleMarkAsRead(index)}
//                 Mark as Read
//               button
//               button onClick={() = handleEdit(index)}Editbutton
//             li
//           ))}
//         ul
//       div

//       div
//         h2Marked Booksh2
//         ul
//           {markedBooks.map((book, index) = (
//             li key={index}
//               {`${book.title} by ${book.author} `}
//               button onClick={() = handleDelete(index, true)}Deletebutton
//               button onClick={() = handleMarkAsUnread(index)}
//                 Mark as Unread
//               button
//             li
//           ))}
//         ul
//       div
//     div
//   );
// };

// export default BookList;
