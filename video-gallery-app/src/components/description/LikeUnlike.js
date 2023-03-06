// import likeImage from "../../assets/like.svg";
// import unlikeImage from "../../assets/unlike.svg";
import { image } from "../../assets/index"

export default function LikeUnlike({ likes, unlikes }) {
  return (
    <div className='flex gap-10 w-48'>
      <div className='flex gap-1'>
        <div className='shrink-0'>
          <img className='w-5 block' src={image.like} alt='Like' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {likes}
        </div>
      </div>
      <div className='flex gap-1'>
        <div className='shrink-0'>
          <img className='w-5 block' src={image.unlike} alt='Unlike' />
        </div>
        <div className='text-sm leading-[1.7142857] text-slate-600'>
          {unlikes}
        </div>
      </div>
    </div>
  )
}
