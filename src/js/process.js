function parse(val) {
    result = val.split("=");
    return result[1];
}

var to_location = parse(window.location.search.replace("?", ""));
console.log(to_location);
