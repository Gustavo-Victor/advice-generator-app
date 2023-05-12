export type AdviceObjType = {
    id: number; 
    advice: string;
}

export type AdviceProps = {
    id?: number;
    advice?: string;
    getData: () => Promise<void>; 
}

