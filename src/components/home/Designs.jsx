/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import './Designs.css'
import { getDocs } from "firebase/firestore";
import { q } from '../../firebase'
import gsap from 'gsap'
// eslint-disable-next-line react/prop-types
function Designs({catArray, setCatArray, setLoading, loading}) {



    const baseFetchLink = `https://demo.firefist.co.in//wp-json/wp/v2`
    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                // fetch spec projects
                const specQuerySnapshot = await getDocs(q);
                specQuerySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                  });
                // fetch posts
                const categoryResponse = await fetch(`${baseFetchLink}/categories`);
                const categories = await categoryResponse.json();


                for (const element of categories) {
                    const postResponse = await fetch(`https://demo.firefist.co.in/wp-json/wp/v2/posts?categories=${element.id}&per_page=5`);
                    const posts = await postResponse.json();

                    for (const post of posts) {
                        const postImageApi = post._links["wp:featuredmedia"]?.[0]?.href;

                        if (postImageApi) {
                            const imageResponse = await fetch(postImageApi);
                            const imageData = await imageResponse.json();
                            const imageLink = imageData?.source_url;

                            post.imageLink = imageLink;
                        }
                    }

                    element.posts = posts;
                }

                setCatArray(categories);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        
    },[])

    useEffect(()=>{
        const specDivs = gsap.utils.toArray(`.spec-proj-cont > div`);
        catArray[0] && specDivs.forEach((specDiv) => {
            gsap.set(specDiv, {
                scale:0,
            })
            gsap.to(specDiv,{
                scale:1,
                ease: "power4.out",
                duration:1,
                scrollTrigger:{
                    trigger:`.spec-section`,
                    start: `top 80%`,
                    end: `80% 50%`,
                    // markers: true,
                    // scrub:2,
                }
            })
        })


        const titles = gsap.utils.toArray(`.designs-title > h2`)
        catArray[0] && titles.forEach(title=>{
            gsap.set(title, {
                x:`-50vw`
            })
            gsap.to(title,{
                x:0,
                ease: "power3.out",
                duration:1,
                scrollTrigger:{
                    trigger:title,
                    start: `50% 95%`,
                    end: `80% 50%`,
                }
            })
        })

        const projContArr = gsap.utils.toArray(`.project-cont`)
        catArray[0] && projContArr.forEach(projCont=>{
            gsap.fromTo(projCont,{
                scale:0.7,
                opacity:0,
            },{
                scale:1,
                opacity:1,
                ease: "power2.out",
                duration:1.5,
                scrollTrigger:{
                    trigger:projCont,
                    start: `top 80%`,
                    end: `80% 50%`,
                    // markers:true,
                }
            })
        })

    },[catArray])
  return (
    <>
        {/* <div style={{display:`none`}} className="spec-section designs-section">
            <div className="designs-section-title">
                <h2>SPEC PROJECTS</h2>
            </div>
            <div className="spec-grid-outer">
                <div className="spec-big">
                    <a href={catArray[0]?.posts[0]?.link} key={catArray[0]?.posts[0]?.id} target="_blank" className='spec-proj-cont'>    
                        <div style={{background:`url(${catArray[0]?.posts[0]?.imageLink})`}}>
                        </div>  
                    </a>
                </div>
                <div className="spec-small">
                    {
                        catArray[0]?.posts?.map((post, j) => {
                            
                            if(j && post.imageLink ){
                                    return<a href={post?.link} key={post?.id} target="_blank" className='spec-proj-cont'>    
                                    <div style={{background:`url(${post?.imageLink})`}}>
                                    </div>  
                                </a>
                            }
                        })

                    }
                </div>
            </div>
        </div> */}
        <div className="designs-section designs-section-anim" >
            <div className="designs-section-title">
                {catArray[0] && <h2>OUR DESIGNS</h2>}
            </div>

            {
                // eslint-disable-next-line react/prop-types
                catArray.map((cat, catInd) =>{
                        
                        if(cat?.posts?.length && cat?.name !="Blog" && cat.id)  {
                            return(<div className="designs" key={cat.id}>
                            <div className={`designs-title designs-title-${catInd}`}>
                                <h2>{cat.name}</h2>
                            </div>
                            <div className="designs-outer-cont">
                                <a href={cat.posts[0].link} key={cat.posts[0].id} target="_blank">    
                                    
                                    <div className="project-top-cont project-cont">
                                        <img src={cat.posts[0].imageLink} alt={cat.posts[0].title.rendered} />

                                    </div>
                                </a>
                                <div className="designs-container">
                                    {
                                        cat.posts.map((post, j) => {
                                            
                                            if(j && post.imageLink ){
                                                return<a href={post.link} key={post.id} target="_blank">    
                                                    <div className="project-cont">
                                                        <img src={post.imageLink} alt={post.title.rendered} />
                                                    </div>  
                                                </a>
                                            }
                                        })
                                    }
                                </div> 
                
                            </div>
                        </div>)}
                    
                } )
            }
        </div>
    </>
    )
}

export default Designs