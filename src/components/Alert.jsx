import { useState, useEffect } from 'react'
import Button from './Button'

const Alert = ({ type, message, delay }) => {
	const [showAlert, setShowAlert] = useState(true)

	const closeAlert = e => {
		e.target.parentElement.parentElement.classList.add('fadeAlert')
		setTimeout(() => {
			setShowAlert(false)
		}, 500)
	}

	useEffect(()=> {
   delay && setTimeout(()=> setShowAlert(false), delay)
	}, [])

	return (
		showAlert && (
			<div className={`alert alert-${type}`}>
				<div className='alert-close'>
					<span className='mr-1'>{message}</span>
					<Button btnClass='btn-close' text='x' onClick={closeAlert} />
				</div>
			</div>
		)
	)
}

export default Alert
