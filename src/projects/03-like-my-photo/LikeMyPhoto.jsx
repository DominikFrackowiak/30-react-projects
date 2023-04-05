import { useState, useEffect } from 'react'
import Title from '../../components/Title'
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'

const LikeMyPhoto = () => {
	const [liked, setLiked] = useState(false)
	const [likes, setLikes] = useState(0)

	const toggleLike = () => {
		if(!liked){
   setLiked(true)
			setLikes(likes + 1)
		} else {
			setLiked(false)
			setLikes(likes - 1)
		}
	}

	// useEffect(() => {
	// 	if (liked) {
	// 		setLikes(prev => prev + 1)
	// 	} else {
	// 		setLikes(prev => prev - 1)
	// 	}
	// }, [liked])

	return (
		<div className='container text-center'>
			<Title text={'Like Photo App'} />
			<Title classes={'subtitle'} text={!likes ? '0 likes' : `${likes} like`} />
			<div className='card card-dark m-auto' style={{ width: 300 }}>
				<div className='card-header fs-xl'>
					<small>Bodeguerito</small>
				</div>
				<img
					src={
						'https://upload.wikimedia.org/wikipedia/commons/f/f0/Bodeguero_young.jpg'
					}
					alt='Bodeguero Andaluz'
					style={{ height: 'fit-content' }}
				/>

				<div
					className='card-footer fs-xl d-flex'
					style={{ justifyContent: 'space-between' }}
				>
					<AiOutlineComment />

					{liked ? (
						<AiFillHeart
							className='text-danger'
							style={{ cursor: 'pointer' }}
							onClick={toggleLike}
						/>
					) : (
						<AiOutlineHeart
							style={{ cursor: 'pointer' }}
							onClick={toggleLike}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default LikeMyPhoto
