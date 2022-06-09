import React from 'react'

export default function Card(/*Object*/ props) {
	return (
		<div className="card">
			
			{
				getCardImageFrom(props)
			}
			
			<div className="card--text-content">
				{ getDestinationLocationFrom(props) }
				{ getDestinationTitleFrom(props) }
				{ getTravelDateFrom(props) }
				{ getDestinationDescriptionFrom(props) }
			</div>
		</div>
	)
}

function getCardImageFrom(props) {
	return (
		<img
			src={props.item.imageUrl}
			alt={props.item.title}
			className="card--image"
		/>
	);
}

function getDestinationLocationFrom(props) {
	return (
		<div className="card--location">
			<img
				src="/images/location-icon.svg"
				alt="Location"
				className="card--location-icon"
			/>
			<span className="uppercase card--location-text card--text-expand">
				{props.item.location}
			</span>
			<span className="card--location-map-url">
				<a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer" className="gray underline">
					View on Google Maps
				</a>
			</span>
		</div>
	);
}

function getDestinationTitleFrom(props) {
	return (
		<div className="bold card--title">
			{props.item.title}
		</div>
	);
}

function getTravelDateFrom(props) {
	return (
		<div className="bold card--travel-date">
			{props.item.startDate} - {props.item.endDate}
		</div>
	);
}

function getDestinationDescriptionFrom(props) {
	return (
		<div className="card--description">
			{props.item.description}
		</div>
	);
}

