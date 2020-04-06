import { Resource } from './resource';

export interface Sprint {
    id: number;
    title: string;
    dInicio: string;
    estorias: Estoria[];
}

export interface Estoria {
    title: string;
    documents: string[];
    tasks: Task[];
}

export interface Task {
    title: string;
    estimated: number;
    resource: Resource[];
}