const profile = {
  age: 20,
  coords: {
    lat: 5,
    lng: 0,
  },
  date: new Date(),
  showAge(): void {
    console.log(this.age);
  },
};

const { age, date }: { age: number; date: Date } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
