import{FacebookIcon, FacebookShareButton,TwitterShareButton} from'react-share'

const Share = () => {
    const curentUrl =window.location.href;
    console.log(window.location.pathname)
    // todo share pore dekhbo....
  return (
    <div className='min-h-[800px] mx-auto flex justify-center'>
    
    <FacebookShareButton
url={'groupestudy-aa61a.web.app'}
quote="please share this post"
hashtag='#post'
    >
   <FacebookIcon></FacebookIcon>
    </FacebookShareButton>
    </div>
  )
}

export default Share