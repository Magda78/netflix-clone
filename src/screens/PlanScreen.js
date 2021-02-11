import React, { useState, useEffect } from 'react';
import { selectUser } from '../features/userSlice';
import db from './firebase';
import './PlanScreen.css';
import { useSelector,useDispatch } from 'react-redux';
import { date } from '../features/userSlice'
import { loadStripe } from '@stripe/stripe-js';


function PlanScreen() {
	const [ products, setProducts ] = useState([]);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
    const [ subscription, setSubscription ] = useState(null);

useEffect(() => {
    db.collection('customers')
    .doc(user.uid)
    .collection('subscriptions')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(async subscription => {
            setSubscription({
role: subscription.data().role,
current_period_end: subscription.data().current_period_end.seconds,
current_period_start: subscription.data().current_period_start.seconds,
            })
			dispatch(date(subscription?.data().current_period_end.seconds))
        })
    })
	
}, [user.uid])


	useEffect(() => {
		db.collection('products').where('active', '==', true).get().then((querySnapshot) => {
			const products = {};
			querySnapshot.forEach(async (productDoc) => {
				products[productDoc.id] = productDoc.data();
				const priceSnap = await productDoc.ref.collection('prices').get();
				priceSnap.docs.forEach((price) => {
					products[productDoc.id].prices = {
						priceId: price.id,
						priceData: price.data()
					};
				});
			});
			setProducts(products);
		});
	}, []);

	console.log(products);
	console.log(subscription)

	const loadCheckout = async (priceId) => {
		const docRef = await db.collection('customers').doc(user.uid).collection('checkout_sessions').add({
			price: priceId,
			success_url: window.location.origin,
			cancel_url: window.location.origin
		});

		docRef.onSnapshot(async (snap) => {
			const { error, sessionId } = snap.data();
			if (error) {
				alert('an error occured:$(error.message');
			}
			if (sessionId) {
				const stripe = await loadStripe(
					'pk_test_51HYvl8LnOOmb4AwPUBJpQo3s6TKDdcTAHg3ExipDIg7Sd0oRFa5uc1K5g5LKOL6IuCncKJUWGJ0RxQtNmCFqiqjy00jS7UkApt'
				);
                stripe.redirectToCheckout({ sessionId });
			}
			
		});
	};

	return (
		<div className="planScreen">
			{/*{subscription && (
<p>Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>
			)}*/}
		
			{Object.entries(products).map(([ productId, productData ]) => {
				const isCurrentPackage = productData.name
				?.toLowerCase()
				.includes(subscription?.role);

				return (
					<div  key={productId} className={`${isCurrentPackage && 'plansScreen__plan--disabled'} plansScreen__plan`}>
						<div className="plansScreen__info">
							<h5>{productData.name}</h5>
							<h6>{productData.description}</h6>
						</div>
						<button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
							{isCurrentPackage ? 'Current Package' : 'Subscribe'}
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default PlanScreen;
