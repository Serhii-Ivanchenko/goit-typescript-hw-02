import { useEffect, useRef, useState } from 'react';
import './App.css';
import getPhotos from '../unsplash-api-fetch';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image, Modal, SearchResults } from './App.types';

const modalInitialParams: Modal = {
  isOpen: false,
  url: '',
  description: '',
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [modalParams, setModalParams] = useState(modalInitialParams);

  const appRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages }: SearchResults = await getPhotos(
          searchQuery,
          page
        );
        setImages(prevImages => {
          return [...prevImages, ...results];
        });
        setShowLoadMoreBtn(total_pages > 0 && total_pages !== page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  const handleSearch = newQuery => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  const handleImageClick = (url, description) => {
    setModalParams({ isOpen: true, url, description });
  };

  const handleModalClose = () => {
    setModalParams(modalInitialParams);
  };

  useEffect(() => {
    if (page === 1) return;

    appRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [images, page]);

  return (
    <div ref={appRef}>
      <SearchBar onSearch={handleSearch} />

      {isError && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}

      {images.length > 0 && !isLoading && showLoadMoreBtn && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}

      {isLoading && <Loader />}
      {modalParams && (
        <ImageModal
          url={modalParams.url}
          description={modalParams.description}
          isOpen={modalParams.isOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
