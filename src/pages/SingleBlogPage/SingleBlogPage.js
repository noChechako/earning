import React, {useEffect} from 'react';
import "./SingleBlogPage.scss";
import Title from '../../components/Title/Title';
import { useParams } from 'react-router-dom';
import { banner_image } from '../../utils/images';
import SingleBlog from '../../components/SingleBlog/SingleBlog';
import {BLOGS} from '../../blogs';

const SingleBlogPage = () => {
  const {slug} = useParams();

  return (
    <div className = "main-holder bg-light-blue">
      <header className='header' style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`
      }}>
        <div className='container'>
          <div className='header-content text-center flex align-center justify-center flex-column text-white'>
            <Title title = "Earning money" color = {`#fff`} />
          </div>
        </div>
      </header>
      <section className='section py-7'>
        <div className='container'>
          <div className='section-content bg-white'>
            <SingleBlog blog = {BLOGS.find(blog => blog.slug === slug)}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleBlogPage;
