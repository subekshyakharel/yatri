import React, { useState, useEffect } from 'react';
import { useGeolocated } from 'react-geolocated';

const Map = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true, // Enable high accuracy
      },
      userDecisionTimeout: 5000,
    });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!coords); // Set loading to true if coords is not available
  }, [coords]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : loading ? (
    <div>Getting the location data...</div>
  ) : coords ? (
    <div>
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{coords.speed}</td>
          </tr>
        </tbody>
      </table>
      <iframe
        src={`https://maps.google.com/maps?q=${coords.latitude},${coords.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        width={700}
        height={1000}
        allowFullScreen
        title="Google Maps"
      ></iframe>
    </div>
  ) : (
    <div>Failed to get the location data</div>
  );
};

export default Map;
