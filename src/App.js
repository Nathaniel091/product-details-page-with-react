import React, {Component} from 'react';
import classes from "./App.module.css";
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import ProductData from './ProductData';
import Topbar from './Topbar';

class App extends Component {

	state = {
		productData: ProductData
	}
	
	render () {
		return (
			<div className="App">
				<Topbar />

				<div className={classes.MainContainer}>
					<div className={classes.ProductPreview}>
						<ProductPreview />
					</div>

					<div className={classes.ProductData}>
						<ProductDetails data={this.state.productData}/>
					</div>
				</div>
			</div>
		);
	};

}

export default App;
