import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface NavigationItemData {
    path: string;
    title: string;
}

export interface MeetupData {
    id?: string;
    title: string;
    image: string;
    address: string;
    description?: string;
}

export interface MeetupDataList {
    meetups: MeetupData[];
}

export interface OnMeetups {
    addMeetups: (data:MeetupData) => void;
}