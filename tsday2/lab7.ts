interface Car {
  brand: string;
  year: number;
  electric: boolean;
}

type CarBrand = Car["brand"];
type CarYear = Car["year"];
type CarElectric = Car["electric"];

const brand: CarBrand = "Tesla";
const year: CarYear = 2025;
const elec: CarElectric = true;