// import { Field, Form, Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { HandleSearch } from '../App/App.types';
import { FC, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: HandleSearch;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem('searchQuery') as HTMLInputElement;
    const query = input.value;

    query.trim() === ''
      ? toast.error('Input can not be empty!')
      : onSearch(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <BsSearch className={css.searchIcon} />
        </button>
      </form>
    </header>
  );

}
 export default SearchBar;