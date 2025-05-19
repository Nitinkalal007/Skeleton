import React, { useState ,useEffect} from 'react'
import SkeletonArticle from '../skeletons/SkeletonArticle';
// import SkeletonElement from '../skeletons/skeletonElement';


const Article = () => {
    const[articles,setarticles]=useState(null);

     useEffect(()=>{
            setTimeout(async()=>{
                const res=await fetch('https://jsonplaceholder.typicode.com/posts')
                const data=await res.json();
                setarticles(data);
    
            },5000)
        })
  return (
    <div className='articles'>
        <h2>articles</h2>


 
 {/* <SkeletonElement type='title'/>
<SkeletonElement type='text'/>
<SkeletonElement type='avatar'/>
<SkeletonElement type='thumbnail'/>   */}

        {articles&&articles.map(article=>(
      <div className='article' key={article.id}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        </div>
        ))}
      {!articles&&[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((n)=><SkeletonArticle key={n} theme="light"/>)}
    </div>
  )
}

export default Article
