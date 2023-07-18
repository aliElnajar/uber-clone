const COORD_API_URL = process.env.NEXT_PUBLIC_API_COORD_URL;
const DISTANCE_API_URL = process.env.NEXT_PUBLIC_API_DISTANCE_URL;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
//fn1 getting distance to set ride prices based on
export async function gettingDistance(locationCoord, DestinationCoord) {
  const adjustedCoordination = `${locationCoord[0]},${locationCoord[1]};${DestinationCoord[0]},${DestinationCoord[1]}`;
  const resp = await fetch(
    `${DISTANCE_API_URL}${adjustedCoordination}?geometries=geojson&` +
      new URLSearchParams({
        access_token: ACCESS_TOKEN,
      })
  );
  const data = await resp.json();
  const distance = data?.routes[0].distance;
  return distance / 1000;
}

// fn2 getting coordinations to set it markers on map
export async function gettingCoordinations(actualAddress) {
  const resp = await fetch(
    `${COORD_API_URL}${actualAddress}.json?` +
      new URLSearchParams({
        access_token: ACCESS_TOKEN,
        limit: 1,
      })
  );
  const data = await resp.json();
  const destinationMark = data.features[0].center;
  return destinationMark;
}

