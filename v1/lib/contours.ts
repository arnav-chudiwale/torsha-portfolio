import data from "./contours-data.json";

export type ContourSet = {
  viewBox: string;
  paths: string[];
};

export const heroContours: ContourSet = data.hero;
export const ambientContours: ContourSet = data.ambient;
export const dividerContours = data.dividerContours;
