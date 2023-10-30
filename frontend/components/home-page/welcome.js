import Image from 'next/image'
import classes from './welcome.module.css'
const Welcome = () =>{
    return(
        <section className={classes.welcome}>
            <div className={classes.image}>
              <Image src='/images/site/sara.png' alt='image of Sara' width={300} height={300}/>
            </div>
            <h1>Hi, I'm Sara</h1>
            <p>I blog about web development</p>
        </section>
    )
}

export default Welcome;