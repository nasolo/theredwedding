function useXtractFile(data){
    data = data.replace(/^\s|\s$/g, "");

    if (/\.\w+$/.test(data)) {
        var link = data.match(/([^/\\]+)\.(\w+)$/);
        if (link)
            return {filename: link[1], ext: link[2]};
        else
            return {filename: "no file name", ext: false};
    } else {
        var m = data.match(/([^/\\]+)$/);
        if (m)
            return {filename: m[1], ext: false};
        else
            return {filename: "no file name", ext: false};
    }
}

export default useXtractFile