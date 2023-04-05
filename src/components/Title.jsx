const Title = ({text, classes}) => {
	return (
		<h1
			className={
				!classes ? 'title text-center' : `${classes} text-center`
			}
		>
			{!text ? 'Title' : text}
		</h1>
	)
}

export default Title
