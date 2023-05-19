import Alert from '../../components/Alert'

const AlertApp = () => {
	return (
		<div className='container mx-auto'>
			<Alert type='success' message='Successful login' />
			<Alert type='info' message='Tme triggered' delay={6000}/>
		</div>
	)
}

export default AlertApp
