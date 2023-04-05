import Title from '../../components/Title'
import { useState } from 'react'

const ESignatureApp = () => {

	const inputStyle = {
		border: 'none',
		borderBottom: '2px dotted',
		outline: 'none',
		padding: '.35rem 0',
	}

	const [name, setName] = useState('')
	const [date, setDate] = useState('')

	document.body.style.background = '#eee'

	return (
		<div className='container text-center'>
			<Title classes={'title'} text={name} />
			<Title classes={'main-title mb-4'} text={date} />
			<p className={'mb-4'}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
				itaque maxime eaque ad praesentium pariatur nihil odio aliquid, quae
				tempora nam sunt quia et commodi saepe ab excepturi molestiae porro.
				Dolor consectetur autem labore perferendis temporibus explicabo
				veritatis, illo voluptatem quam nesciunt culpa dolorum aliquam assumenda
				placeat nam excepturi molestiae expedita eaque ut ratione rem porro quia
				accusamus. Quisquam distinctio magnam veniam dolor iure velit sint
				accusamus tempora aspernatur laborum sequi eos, eveniet nulla esse, quos
				eius cumque quas explicabo accusantium in ut est! Deleniti delectus
				molestiae
			</p>
			<footer className='d-flex' style={{
				justifyContent: 'space-around'
			}}>
				<input type='date' value={date} style={inputStyle} onChange={e=>setDate(e.target.value)}/>
				<input type='text' value={name} style={inputStyle} onChange={e=>setName(e.target.value)}/>
			</footer>
		</div>
	)
}

export default ESignatureApp
