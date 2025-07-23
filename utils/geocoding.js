require('dotenv').config();
const axios = require('axios');

async function geocodeLocation(location) {
    const url = `https://nominatim.openstreetmap.org/search`;
    try {
        const response = await axios.get(url, {
            params: {
                q: location,
                format: 'json',
                limit: 1
            },
            headers: {
                'User-Agent': process.env.GEOCODING_USER_AGENT // Nominatim requires this
            }
        });

        if (response.data.length === 0) return null;

        const result = response.data[0];
        return {
            latitude: parseFloat(result.lat),
            longitude: parseFloat(result.lon)
        };
    } catch (err) {
        console.error('Nominatim error:', err.message);
        return null;
    }
}

module.exports = geocodeLocation;
