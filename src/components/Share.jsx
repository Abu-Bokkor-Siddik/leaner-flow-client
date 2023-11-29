import{FacebookIcon, FacebookShareButton,TwitterShareButton} from'react-share'

const Share = () => {
    // const curentUrl =window.location.href;
    console.log(window.location.pathname)
    // todo share pore dekhbo....
  return (
   <div className='min-h-[800px] mx-auto '>
   <h1 className='text-center text-4xl my-8'>Share the Posts</h1>
   <div className=' min-h-[800px] mx-auto flex justify-center'>
    
   <FacebookShareButton
url={`https://forum-e3e2b.web.app/${window.location.pathname}`}
quote="please share this post"
hashtag='#post'
   >
  <FacebookIcon></FacebookIcon>
   </FacebookShareButton>
   </div>
   
   </div>
  )
}

export default Share