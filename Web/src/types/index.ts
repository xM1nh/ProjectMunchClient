export type TPointOfInterest = {
  longitude: number;
  latitude: number;
  name: string;
  description: string;
  reviews: number;
  photos: string[];
};

export type TCoordinates = {
  longitude: number;
  latitude: number;
};

export type TGetReverseGeocoding = {
  type: string;
  query: [number, number];
  features: TFeature[];
  attribution: string;
};

type TFeature = {
  id: string;
  type: string;
  place_type: string;
  relevance: number;
  address?: string;
  properties: {
    accuracy?: string;
    address?: string;
    category?: string;
    maki?: string;
    wikidata?: string;
    short_code?: string;
  };
  text: string;
  place_name: string;
  matching_text?: string;
  matching_place_name?: string;
  language?: string;
  bbox: [number, number, number, number];
  center: [number, number];
  geometry: {
    type: string;
    coordinates: [number, number];
    interpolated?: boolean;
    omitted?: boolean;
  };
  context: [never];
  routable_points?: {
    points?: {
      points?: [{ coordinates: [lon: number, lat: number] }] | null;
    };
  };
};
