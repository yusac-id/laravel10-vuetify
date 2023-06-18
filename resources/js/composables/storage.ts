export function useStorage() {
    function saveData(key: string, val: any) {
        localStorage.setItem(key, JSON.stringify(val));
    }

    function getData(key: string) {
        const data: string = localStorage.getItem(key)!;
        return JSON.parse(data);
    }

    function removeData(key){
        localStorage.removeItem(key);
    }

    function clearData(){
        localStorage.clear();
    }

    return{
        saveData,
        getData,
        removeData,
        clearData
    }
}
