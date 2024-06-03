//dataArray的类型
export interface Indata {
    path: string,
    name: string,
    short_name?: string,
    checked: boolean
}
export type dataType = Indata[]