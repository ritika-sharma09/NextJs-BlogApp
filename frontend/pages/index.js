import { Fragment } from "react";
import Welcome from '../components/home-page/welcome';
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from '../lib/posts-util';
import Head from "next/head";

const HomePage = (props) => {
    return (
    <Fragment>
        <Head>
            <title>Welcome Page</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
        </Head>
        <Welcome />
        <FeaturedPosts posts = {props.posts}/>
    </Fragment>
    )
}

export default HomePage;

export function getStaticProps(){
   const featuredPosts =  getFeaturedPosts();

   return{
    props:{
        posts:featuredPosts
    }
   }
}