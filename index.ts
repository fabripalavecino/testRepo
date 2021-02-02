const profile = {
  age: 20,
  coords: {
    lat: 5,
    lng: 0,
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
