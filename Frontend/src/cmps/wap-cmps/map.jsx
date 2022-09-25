import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, cmp }) => <div style={{ fontSize: '40px' }}>{text}</div>;

export const Map = ({ cmp }) => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    let mapStyling = { styles: [{ stylers: [{ 'saturation': 0 }, { 'gamma': 0.7 }, { 'lightness': 10 }, { 'visibility': 'on' }] }] }
    return (
        // Important! Always set the container height explicitly
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBkD9-ghT1ENc022RuqNwiJ6Ps974Fn8s0" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={cmp?.info?.coors ? { ...cmp?.info?.coors } : []}
                zoom={14}
                options={mapStyling}
            >
                <AnyReactComponent
                    lat={cmp.info?.coors.lat}
                    lng={cmp.info?.coors.lng}
                    text="📌"
                />
            </GoogleMapReact>
        </div>
    );
}