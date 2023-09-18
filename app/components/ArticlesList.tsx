import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import davinci from '../../public/davinciImage.jpeg'
import Image from 'next/image';

interface Articles{
    id:number;
    
    articletitle:string;
    articleplatform:string;
    articlecategory:string;
    articlelink:string;
}
const ArticlesList = () => {
    const articles:Articles[] = [
        {
            id:1,          
            articletitle:"The Land of the Lawless Part 1 : Justice trumphs",
            articleplatform:"medium",
            articlecategory:"short fiction",
            articlelink:"https://medium.com/@thomasnjon/the-land-of-the-lawless-part-1-justice-trumphs-cc5bc52c8e2c"
        },
        {
            id:2,          
            articletitle:"The Land of the Lawless Part 2 The betrayal",
            articleplatform:"medium",
            articlecategory:"short fiction",
            articlelink:"https://medium.com/@thomasnjon/the-land-of-the-lawless-part-2-the-betrayal-779d9fdea0c9"
        },
        {
            id:3,          
            articletitle:"Land Of The Lawless : Part 3 Love truimphs",
            articleplatform:"medium",
            articlecategory:"short fiction",
            articlelink:"https://medium.com/@thomasnjon/land-of-the-lawless-part-3-love-truimphs-bd4e83a65d6a"
        },
        {
            id:4,           
            articletitle:"Land Of The Lawless : Part 4 Brief encounter with Lila",
            articleplatform:"medium",
            articlecategory:"short fiction",
            articlelink:"https://medium.com/@thomasnjon/land-of-the-lawless-part-4-brief-encounter-with-lila-b6d3420b88e7"
        },
        {
            id:5,
            articletitle:"Creating a like Button using React (useState)",
            articleplatform:"medium",
            articlecategory:"technical blog",
            articlelink:"https://medium.com/@thomasnjon/creating-a-like-button-using-react-usestate-23478b8e520c"
        }
    ]
  return (
    <div style={{
        marginTop:5,
        width:"60%",
        marginLeft:"20%",
    }} >
        {articles.map(item=>
            <div key={item.id} style={{
                //width:"80%",
                //marginLeft:"10%",
                marginTop:5,
                padding:5,
                borderWidth:1.5,
                borderColor:"black",
                borderRadius:20,
                display:"flex",
                flexDirection:"row",
            }} >
            <span style={{
               width:"20%",
            }} >
                <Image src={davinci} alt='logo' style={{
                     width:100,
                     height:100,
                     marginTop:"5%",
                     borderRadius:"100%",
                     marginBottom:"5%"
                }} />
            </span>
            <div style={{
                width:"90%",
                height:"100%"
            }} >
            <p style={{
                marginLeft:'10%',
                fontWeight:"bold",
                paddingTop:"2%"
            }} >{item.articletitle}</p>
            <p style={{
                 marginLeft:'10%',
            }} >Blog category: {item.articlecategory}</p>
            <p style={{
                 marginLeft:'10%',
            }} >Posted on: {item.articleplatform}</p>
            </div>
            <Link href={item.articlelink} style={{
                height:"100%",
                width:"10%",
            }} ><FontAwesomeIcon icon={faLink} style={{
                width:20,
                height:20,
                alignContent:"center",
                marginTop:"50%"
            }} /></Link>
            </div>
        )}
    </div>
  )
}

export default ArticlesList