import React from 'react';
import Title from '../../components/Title'

const RandomizeColors = () => {

 const handleClick = () => {
		 const red = Math.floor(Math.random() * 255)
			const green = Math.floor(Math.random() * 255)
   const blue = Math.floor(Math.random() * 255)
   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
	}

 return (
		<div className='container m-auto text-center'>
			<Title text={'Randomize Color'} classes={'title mb-4'} />
			<button className='btn btn-danger' onClick={handleClick}>Click me</button>
			<button className='btn btn-success' onClick={handleClick}>Click me</button>
			<button className='btn btn-primary' onClick={handleClick}>Click me</button>
			<button className='btn btn-warning' onClick={handleClick}>Click me</button>
		</div>
 )
};

export default RandomizeColors;