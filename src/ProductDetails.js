import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {

	const colorOptions = props.data.colorOptions.map((item, pos)=>{
		const addSelectedProductImageClassToFirstImage = (() => {
	        if (pos === 0) {
	        	return (
	        		// <img key={pos} className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src={item.imageUrl} alt={item.styleName} />
	        		<img key={pos} className={`${classes.ProductImage} ${classes.SelectedProductImage}`} src={item.imageUrl} alt={item.styleName} />
	        	)
	      	}
      		return (
      			<img key={pos} className={classes.ProductImage} src={item.imageUrl} alt={item.styleName} />
      		)
  		})

		return addSelectedProductImageClassToFirstImage();
	});

	return(
		<div className={classes.ProductData}>
					<h1 className={classes.ProductTitle}>
					 	{props.data.title}
					</h1>
					<p className={classes.ProductDescription}>{props.data.description}</p>


					<h3 className={classes.SectionHeading}>Select Color</h3>
					<div>
						{colorOptions}
					</div>

					<h3 className={classes.SectionHeading}>Features</h3>
					<div>
						<button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
						<button className={classes.FeatureItem}>Heart Rate</button>
					</div>

					<button className={classes.PrimaryButton}>Buy Now</button>
				</div>
	);
};

export default ProductDetails;