// Province codes matching SVG path IDs
export type ProvinceCode =
  | 'ON' | 'AB' | 'BC' | 'NS' | 'NB'
  | 'NL' | 'SK' | 'NT' | 'MB' | 'QC'
  | 'PE' | 'YT' | 'NU';

export interface SchoolBoardSubmission {
  schoolBoard: string;
  city: string;
  province: ProvinceCode;
}

export interface SchoolBoardStats {
  schoolBoard: string;
  city: string;
  province: ProvinceCode;
  submissionCount: number;
}

export interface CityPin {
  city: string;
  province: ProvinceCode;
  coordinates: { lat: number; lng: number };
  schoolBoards: SchoolBoardStats[];
  totalSubmissions: number;
  boardCount: number;
}

export interface ProvinceStats {
  code: ProvinceCode;
  name: string;
  nameFr: string;
  cities: CityPin[];
  totalSubmissions: number;
  totalSchoolBoards: number;
}

// Province metadata with display names
export const provinceMetadata: Record<ProvinceCode, { name: string; nameFr: string }> = {
  ON: { name: 'Ontario', nameFr: 'Ontario' },
  AB: { name: 'Alberta', nameFr: 'Alberta' },
  BC: { name: 'British Columbia', nameFr: 'Colombie-Britannique' },
  NS: { name: 'Nova Scotia', nameFr: 'Nouvelle-\u00C9cosse' },
  NB: { name: 'New Brunswick', nameFr: 'Nouveau-Brunswick' },
  NL: { name: 'Newfoundland and Labrador', nameFr: 'Terre-Neuve-et-Labrador' },
  SK: { name: 'Saskatchewan', nameFr: 'Saskatchewan' },
  NT: { name: 'Northwest Territories', nameFr: 'Territoires du Nord-Ouest' },
  MB: { name: 'Manitoba', nameFr: 'Manitoba' },
  QC: { name: 'Quebec', nameFr: 'Qu\u00E9bec' },
  PE: { name: 'Prince Edward Island', nameFr: '\u00CEle-du-Prince-\u00C9douard' },
  YT: { name: 'Yukon', nameFr: 'Yukon' },
  NU: { name: 'Nunavut', nameFr: 'Nunavut' },
};

// City coordinates for pin placement (lat/lng for MapLibre)
export const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  // Ontario
  'Toronto': { lat: 43.6532, lng: -79.3832 },
  'Mississauga': { lat: 43.5890, lng: -79.6441 },
  'Hamilton': { lat: 43.2557, lng: -79.8711 },
  'Ottawa': { lat: 45.4215, lng: -75.6972 },
  'London': { lat: 42.9849, lng: -81.2453 },
  'Kitchener': { lat: 43.4516, lng: -80.4925 },
  'Burlington': { lat: 43.3255, lng: -79.7990 },
  'Windsor': { lat: 42.3149, lng: -83.0364 },
  'Brantford': { lat: 43.1394, lng: -80.2644 },
  'Whitby': { lat: 43.8975, lng: -78.9429 },
  'Aurora': { lat: 44.0065, lng: -79.4504 },
  'Oshawa': { lat: 43.8971, lng: -78.8658 },
  'Peterborough': { lat: 44.3091, lng: -78.3197 },
  'Markham': { lat: 43.8561, lng: -79.3370 },
  'Brockville': { lat: 44.5895, lng: -75.6843 },
  "L'Orignal": { lat: 45.6178, lng: -74.6875 },
  'Sudbury': { lat: 46.4917, lng: -81.0100 },
  'Timmins': { lat: 48.4758, lng: -81.3303 },
  'Midhurst': { lat: 44.4500, lng: -79.7167 },
  'Seaforth': { lat: 43.5517, lng: -81.3994 },
  'Sarnia': { lat: 42.9745, lng: -82.4066 },
  'Kemptville': { lat: 45.0167, lng: -75.6500 },
  // Alberta
  'Calgary': { lat: 51.0447, lng: -114.0719 },
  'Edmonton': { lat: 53.5461, lng: -113.4938 },
  'Red Deer': { lat: 52.2681, lng: -113.8112 },
  'Leduc': { lat: 53.2594, lng: -113.5492 },
  'Sherwood Park': { lat: 53.5233, lng: -113.3150 },
  'Camrose': { lat: 53.0168, lng: -112.8341 },
  // British Columbia
  'Surrey': { lat: 49.1913, lng: -122.8490 },
  'New Westminster': { lat: 49.2057, lng: -122.9110 },
  'Abbotsford': { lat: 49.0504, lng: -122.3045 },
  'Kelowna': { lat: 49.8880, lng: -119.4960 },
  'North Vancouver': { lat: 49.3165, lng: -123.0688 },
  'Fort Nelson': { lat: 58.8050, lng: -122.6972 },
  // Nova Scotia
  'Halifax': { lat: 44.6488, lng: -63.5752 },
  'Port Hawkesbury': { lat: 45.6167, lng: -61.3500 },
  // New Brunswick
  'Moncton': { lat: 46.0878, lng: -64.7782 },
  'Saint John': { lat: 45.2733, lng: -66.0633 },
  // Newfoundland
  "St. John's": { lat: 47.5615, lng: -52.7126 },
  // Saskatchewan
  'Melfort': { lat: 52.8564, lng: -104.6108 },
  'Kenaston': { lat: 51.5167, lng: -106.7833 },
  'Moose Jaw': { lat: 50.3934, lng: -105.5519 },
  // Northwest Territories
  'Yellowknife': { lat: 62.4540, lng: -114.3718 },
};

// Province name to code mapping
const provinceNameToCode: Record<string, ProvinceCode> = {
  'Ontario': 'ON',
  'Alberta': 'AB',
  'British Columbia': 'BC',
  'Nova Scotia': 'NS',
  'New Brunswick': 'NB',
  'Newfoundland and Labrador': 'NL',
  'Newfoundland and Labrar': 'NL', // Handle typo
  'Saskatchewan': 'SK',
  'Northwest Territories': 'NT',
  'Manitoba': 'MB',
  'Quebec': 'QC',
  'Prince Edward Island': 'PE',
  'Yukon': 'YT',
  'Nunavut': 'NU',
};

// Name normalization map
const nameNormalizations: Record<string, string> = {
  'Fundation for the Future Charter Academy': 'Foundations for the Future Charter Academy',
  'FFCA': 'Foundations for the Future Charter Academy',
  'FFCA High School South Campus': 'Foundations for the Future Charter Academy',
  'St.thomas aqinees': 'St. Thomas Aquinas Roman Catholic Schools',
};

function normalizeSchoolName(name: string): string {
  return nameNormalizations[name] || name;
}

function getProvinceCode(provinceName: string): ProvinceCode {
  return provinceNameToCode[provinceName] || 'ON';
}

// Raw submission data
const rawSubmissionData: Array<{ schoolBoard: string; city: string; province: string }> = [
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Conseil scolaire catholique MonAvenir', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Calgary Catholic School District', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Anglophone East School District', city: 'Moncton', province: 'New Brunswick' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Kawartha Pine Ridge District School Board', city: 'Peterborough', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Thames Valley District School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Greater Essex County District School Board', city: 'Windsor', province: 'Ontario' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Conseil scolaire catholique MonAvenir', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Waterloo Catholic District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Halifax Regional Centre for Education', city: 'Halifax', province: 'Nova Scotia' },
  { schoolBoard: 'New Westminster School District', city: 'New Westminster', province: 'British Columbia' },
  { schoolBoard: 'Red Deer Catholic Regional Schools', city: 'Red Deer', province: 'Alberta' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth Catholic District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'Halifax Regional Centre for Education', city: 'Halifax', province: 'Nova Scotia' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: "Conseil scolaire de district catholique de l'Est ontarien", city: "L'Orignal", province: 'Ontario' },
  { schoolBoard: 'Abbotsford School District', city: 'Abbotsford', province: 'British Columbia' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Heritage Christian Online School', city: 'Kelowna', province: 'British Columbia' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'STEM Innovation Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Calgary Board of Education', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'St. Thomas Aquinas Roman Catholic Schools (STAR Catholic)', city: 'Leduc', province: 'Alberta' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'STEM Innovation Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Avon Maitland District School Board', city: 'Seaforth', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Edmonton Catholic Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Halton Catholic District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Kawartha Pine Ridge District School Board', city: 'Peterborough', province: 'Ontario' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Greater Essex County District School Board', city: 'Windsor', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth Catholic District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Catholic District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Catholic District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Elk Island Public Schools', city: 'Sherwood Park', province: 'Alberta' },
  { schoolBoard: 'Halifax Regional Centre for Education', city: 'Halifax', province: 'Nova Scotia' },
  { schoolBoard: 'Elk Island Public Schools', city: 'Sherwood Park', province: 'Alberta' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Thames Valley District School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Conseil scolaire Viamonde', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Durham Catholic District School Board', city: 'Oshawa', province: 'Ontario' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Saskatchewan Distance Learning Centre', city: 'Kenaston', province: 'Saskatchewan' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Foundations for the Future Charter Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Conseil scolaire catholique MonAvenir', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Calgary Board of Education', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'North East School Division', city: 'Melfort', province: 'Saskatchewan' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'North Vancouver School District', city: 'North Vancouver', province: 'British Columbia' },
  { schoolBoard: 'Strait Regional Centre for Education', city: 'Port Hawkesbury', province: 'Nova Scotia' },
  { schoolBoard: 'Heritage Christian Online School', city: 'Kelowna', province: 'British Columbia' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'North East School Division', city: 'Melfort', province: 'Saskatchewan' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Greater Essex County District School Board', city: 'Windsor', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Anglophone East School District', city: 'Moncton', province: 'New Brunswick' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Halifax Regional Centre for Education', city: 'Halifax', province: 'Nova Scotia' },
  { schoolBoard: "Conseil scolaire public du Grand Nord de l'Ontario", city: 'Sudbury', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Brant Haldimand Norfolk Catholic District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'District School Board Ontario North East', city: 'Timmins', province: 'Ontario' },
  { schoolBoard: 'St. Thomas Aquinas Roman Catholic Schools (STAR Catholic)', city: 'Leduc', province: 'Alberta' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Ottawa Catholic School Board', city: 'Ottawa', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth Catholic District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'STEM Innovation Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Hamilton-Wentworth Catholic District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Ottawa Catholic School Board', city: 'Ottawa', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Holy Trinity Catholic School Division', city: 'Moose Jaw', province: 'Saskatchewan' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Ottawa Catholic School Board', city: 'Ottawa', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Simcoe County District School Board', city: 'Midhurst', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Yellowknife Education District No. 1', city: 'Yellowknife', province: 'Northwest Territories' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: "Conseil scolaire public du Grand Nord de l'Ontario", city: 'Sudbury', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Foundations for the Future Charter Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Foundations for the Future Charter Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Foundations for the Future Charter Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Strait Regional Centre for Education', city: 'Port Hawkesbury', province: 'Nova Scotia' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Ottawa Catholic School Board', city: 'Ottawa', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Fort Nelson School District', city: 'Fort Nelson', province: 'British Columbia' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Calgary Catholic School District', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Anglophone East School District', city: 'Moncton', province: 'New Brunswick' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Conseil scolaire catholique MonAvenir', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Greater Essex County District School Board', city: 'Windsor', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Hamilton-Wentworth Catholic District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Heritage Christian Online School', city: 'Kelowna', province: 'British Columbia' },
  { schoolBoard: 'St. Thomas Aquinas Roman Catholic Schools', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Catholic District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Fort Nelson School District', city: 'Fort Nelson', province: 'British Columbia' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Calvin Christian School', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Conseil scolaire Viamonde', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Upper Canada District School Board', city: 'Brockville', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'St. Thomas Aquinas Roman Catholic Schools (STAR Catholic)', city: 'Leduc', province: 'Alberta' },
  { schoolBoard: 'Calgary Board of Education', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Hamilton-Wentworth Catholic District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Toronto Catholic District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Calgary Board of Education', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Anglophone East School District', city: 'Moncton', province: 'New Brunswick' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Durham Catholic District School Board', city: 'Oshawa', province: 'Ontario' },
  { schoolBoard: 'Ottawa Catholic School Board', city: 'Ottawa', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'STEM Innovation Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Halton Catholic District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Ottawa Catholic School Board', city: 'Ottawa', province: 'Ontario' },
  { schoolBoard: 'Toronto Catholic District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: '\u00C9cole secondaire catholique Monseigneur de Charbonnel', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Surrey School District', city: 'Surrey', province: 'British Columbia' },
  { schoolBoard: 'Thames Valley District School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Anglophone East School District', city: 'Moncton', province: 'New Brunswick' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Ottawa Catholic School Board', city: 'Ottawa', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Calgary Catholic School District', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'District School Board Ontario North East', city: 'Timmins', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'NLSchools', city: "St. John's", province: 'Newfoundland and Labrador' },
  { schoolBoard: 'Lambton Kent District School Board', city: 'Sarnia', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Anglophone South School District', city: 'Saint John', province: 'New Brunswick' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Heritage Christian Online School', city: 'Kelowna', province: 'British Columbia' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Conseil scolaire catholique MonAvenir', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Waterloo Catholic District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Halifax Regional Centre for Education', city: 'Halifax', province: 'Nova Scotia' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Grand Erie District School Board', city: 'Brantford', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Edmonton Public Schools', city: 'Edmonton', province: 'Alberta' },
  { schoolBoard: 'Battle River School Division', city: 'Camrose', province: 'Alberta' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Toronto Catholic District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'York Catholic District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'London District Catholic School Board', city: 'London', province: 'Ontario' },
  { schoolBoard: 'Peel District School Board', city: 'Mississauga', province: 'Ontario' },
  { schoolBoard: 'Catholic District School Board of Eastern Ontario', city: 'Kemptville', province: 'Ontario' },
  { schoolBoard: 'Durham District School Board', city: 'Whitby', province: 'Ontario' },
  { schoolBoard: 'Foundations for the Future Charter Academy', city: 'Calgary', province: 'Alberta' },
  { schoolBoard: 'Toronto District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Waterloo Region District School Board', city: 'Kitchener', province: 'Ontario' },
  { schoolBoard: 'Toronto Catholic District School Board', city: 'Toronto', province: 'Ontario' },
  { schoolBoard: 'Halton District School Board', city: 'Burlington', province: 'Ontario' },
  { schoolBoard: 'York Region District School Board', city: 'Aurora', province: 'Ontario' },
  { schoolBoard: 'Hamilton-Wentworth District School Board', city: 'Hamilton', province: 'Ontario' },
  { schoolBoard: 'Dufferin-Peel Catholic District School Board', city: 'Mississauga', province: 'Ontario' },
];

// Parse raw data into typed submissions
function parseRawData(): SchoolBoardSubmission[] {
  return rawSubmissionData.map(item => ({
    schoolBoard: normalizeSchoolName(item.schoolBoard),
    city: item.city,
    province: getProvinceCode(item.province),
  }));
}

// Build aggregated stats from submissions
function buildStats(submissions: SchoolBoardSubmission[]): Map<ProvinceCode, ProvinceStats> {
  const provinceMap = new Map<ProvinceCode, ProvinceStats>();

  // Group submissions by school board + city + province
  const boardCounts = new Map<string, { submission: SchoolBoardSubmission; count: number }>();

  for (const submission of submissions) {
    const key = `${submission.schoolBoard}|${submission.city}|${submission.province}`;
    const existing = boardCounts.get(key);
    if (existing) {
      existing.count++;
    } else {
      boardCounts.set(key, { submission, count: 1 });
    }
  }

  // Build province stats
  Array.from(boardCounts.entries()).forEach(([, { submission, count }]) => {
    let province = provinceMap.get(submission.province);
    if (!province) {
      const meta = provinceMetadata[submission.province as ProvinceCode];
      province = {
        code: submission.province,
        name: meta.name,
        nameFr: meta.nameFr,
        cities: [],
        totalSubmissions: 0,
        totalSchoolBoards: 0,
      };
      provinceMap.set(submission.province, province);
    }

    // Find or create city
    let city = province.cities.find(c => c.city === submission.city);
    if (!city) {
      const coords = cityCoordinates[submission.city] || { lat: 56.0, lng: -96.0 };
      city = {
        city: submission.city,
        province: submission.province,
        coordinates: coords,
        schoolBoards: [],
        totalSubmissions: 0,
        boardCount: 0,
      };
      province.cities.push(city);
    }

    city.schoolBoards.push({
      schoolBoard: submission.schoolBoard,
      city: submission.city,
      province: submission.province,
      submissionCount: count,
    });
    city.totalSubmissions += count;
    city.boardCount++;
    province.totalSubmissions += count;
    province.totalSchoolBoards++;
  });

  // Sort school boards within each city by submission count (descending)
  Array.from(provinceMap.values()).forEach((province: ProvinceStats) => {
    province.cities.forEach((city: CityPin) => {
      city.schoolBoards.sort((a: SchoolBoardStats, b: SchoolBoardStats) => b.submissionCount - a.submissionCount);
    });
    // Sort cities by total submissions (descending)
    province.cities.sort((a: CityPin, b: CityPin) => b.totalSubmissions - a.totalSubmissions);
  });

  return provinceMap;
}

// Pre-computed stats
const parsedSubmissions = parseRawData();
export const submissionStats = buildStats(parsedSubmissions);

// Helper functions
export function getProvinceStats(provinceCode: ProvinceCode): ProvinceStats | undefined {
  return submissionStats.get(provinceCode);
}

export function getAllProvinceStats(): ProvinceStats[] {
  return Array.from(submissionStats.values()).sort((a, b) => b.totalSubmissions - a.totalSubmissions);
}

export function getTotalSubmissions(): number {
  return Array.from(submissionStats.values()).reduce(
    (total, province) => total + province.totalSubmissions,
    0
  );
}

export function getTotalSchoolBoards(): number {
  return Array.from(submissionStats.values()).reduce(
    (total, province) => total + province.totalSchoolBoards,
    0
  );
}

export function getTotalProvinces(): number {
  return submissionStats.size;
}

export function getAllCityPins(): CityPin[] {
  return Array.from(submissionStats.values()).flatMap(province => province.cities);
}
