import React from 'react';
import "./SingleBlog.scss";
import { useBlogsContext } from '../../context/blogsContext';
import {Link} from "react-router-dom";
import Loader from '../Loader/Loader';

const SingleBlog = ({blog}) => {
  const {tempBlogs, singleBlogLoading} = useBlogsContext();
  const [html, setHtml] = React.useState(null)
  React.useEffect(_ => {
    // тут типа запрос и получение html ввиде строки
    setTimeout(_ => setHtml(blog.html), 0)
  })
  if(singleBlogLoading){
    return(<Loader />);
  }


  return (
    <div className='blog-single grid'>
      {!html && <p>Сейчас тут появится новый html...</p>}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}

export default SingleBlog
