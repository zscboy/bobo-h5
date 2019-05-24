/**
 * 数据存取
 */
export namespace DataStore {
    export const getString = (key: string, def: string = ""): string => {
        const v = cc.sys.localStorage.getItem(key); // tslint:disable-line: no-unsafe-any
        if (v) {
            return <string>v;
        }

        return def;
    };

    export const setItem = (key: string, item: string | number | object) => {
        cc.sys.localStorage.setItem(key, item); // tslint:disable-line: no-unsafe-any
    };

    export const hasKey = (key: string): boolean => {
        return cc.sys.localStorage.getItem(key) !== undefined; // tslint:disable-line: no-unsafe-any
    };
}
