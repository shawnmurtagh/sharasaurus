import { Members } from './Members';

export interface CircleDetails {
    circleId: number; // Unique identifier for the circle
    circleName: string; // Radius of the circle
    members: Members[];
}
export const defaultCircleDetails: CircleDetails = {
    circleId: 0,
    circleName: '',
    members: []
};