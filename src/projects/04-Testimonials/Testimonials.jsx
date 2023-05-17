import { useState, useEffect } from 'react'
import Title from '../../components/Title'
import Button from '../../components/Button'
import { BsFillFileEarmarkPostFill, BsTypeH2 } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([])
	const [data, setData] = useState([])

	useEffect(() => {
		console.log(data)
	}, [data])

	useEffect(() => {
		if (testimonials.length) {
			fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
				.then(response => response.json())
				.then(json => setData(json))
		}
	}, [testimonials])
	return (
		<div className='container m-auto'>
			<Title text='Testimonials App' />
			<Button
				text='Posts'
				btnClass='btn-info'
				icon={<BsFillFileEarmarkPostFill />}
				onClick={() => setTestimonials('posts')}
			/>
			<Button
				text='Users'
				btnClass='btn-info'
				icon={<FaUserAlt />}
				onClick={() => setTestimonials('users')}
			/>
			<Button
				text='Comments'
				btnClass='btn-info'
				icon={<BiCommentDetail />}
				onClick={() => setTestimonials('comments')}
			/>
			{!testimonials.length ? (
				<Title text='Select form above' classes={'subtitle text-primary'} />
			) : (
				<Title text={testimonials} classes={'subtitle text-primary'} />
			)}
			{!data.length
				? null
				: data.map(item => (
						<div key={item.id} className='card card-primary mb-2'>
							{item.name && <h2 className='card-header'>{item.name}</h2>}
							<div className='card-body'>
								<h4>{item.title}</h4>
								<p>{item.body}</p>
							</div>
       {item.email && (
        <small className='card-footer'>{item.email}</small>
       )}
						</div>
				  ))}
		</div>
	)
}

export default Testimonials
