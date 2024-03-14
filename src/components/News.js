import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    try {
      setloading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=82e775ca322241b39ac6122e9c436362&page=${page}&pageSize=${props.pageSize}`;
      const response = await axios.get(url);
      const { articles, totalResults } = response.data;
      setarticles(articles);
      settotalResults(totalResults);
      setloading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setloading(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, [page, props.country, props.category, props.pageSize]);

  const fetchMoreData = async () => {
    try {
      setpage(page + 1);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=82e775ca322241b39ac6122e9c436362&page=${page}&pageSize=${props.pageSize}`;
      const response = await axios.get(url);
      const { articles, totalResults } = response.data;
      setarticles((prevArticles) => [...prevArticles, ...articles]);
      settotalResults(totalResults);
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  return (
    <div className=''>
      <h1 className="text-center text-dark" id="heading" style={{ margin: '35px 0px ' }}>
        Latest News - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ''}
                  description={element.description ? element.description : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
