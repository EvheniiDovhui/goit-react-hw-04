import React, { useState } from 'react';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSubmit(query);
    } else {
      toast.error('Будь ласка, введіть текст для пошуку зображень.');
    }
  };

  return (
    <header className={css['search-container']}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Пошук зображень та фото"
        />
        <button className={css.button} type="submit">
          Пошук
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
