export type TypeInputRenderArray = {
    id: number;
    labelText: string;
    value: string | number;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}