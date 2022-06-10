export interface Word {
    _id: String;
    suno: String;
    pinyin: String;
    chineseName: String;
    mean: String;
    deepMean: String;
    explain: String;
    img: String[];
}

export type HeaderProps = {
    user: any;
};
